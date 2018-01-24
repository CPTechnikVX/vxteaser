import React      from 'react';
import Constants  from '../../utils/Constants';
import classnames from 'classnames';

export default class Text extends React.PureComponent {
	render() {
		const classList = [];

		classList.push(Constants.ClassName.Text);

		if (this.props.color) {
			classList.push(Constants.PrefixClassName.Color + this.props.color);
		}

		return <span className={classnames(classList)}>{this.props.children}</span>;
	}
}
