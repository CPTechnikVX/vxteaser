import React             from 'react';
import {PrefixClassName} from '../../utils/Constants';
import classnames        from 'classnames';

export default class Link extends React.PureComponent {
	render() {
		const classList = [];
		let onClick;

		if (this.props.color) {
			classList.push(PrefixClassName.Color + this.props.color);
		}

		if (typeof this.props.url !== 'undefined') {
			onClick = (e) => {
				e.preventDefault();
				e.stopPropagation();

				alert('Redirect to:' + this.props.url);
			};
		}

		return <a className={classnames(classList)} onClick={onClick}>{this.props.children}</a>;
	}
}
