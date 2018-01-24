import React      from 'react';
import PropTypes  from 'prop-types';
import Constants  from '../../utils/Constants';
import classnames from 'classnames';

/**
 * Component is described here.
 */
export default class Button extends React.PureComponent {
	static propTypes = {
		/**
		 * Textual color definition
		 */
		color: PropTypes.oneOf(['primary']),
	};

	render() {
		const classList = [];
		let onClick;

		classList.push(Constants.ClassName.Button);

		if (this.props.color) {
			classList.push(Constants.PrefixClassName.Color + this.props.color);
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
