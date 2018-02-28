import React      from 'react';
import PropTypes  from 'prop-types';
import Constants  from '../../utils/Constants';
import classnames from 'classnames';

/**
 * General button element
 */
export default class Button extends React.PureComponent {
	render() {
		const {children, color, link} = this.props;
		const classList               = [];
		let onClickFn;

		classList.push(Constants.ClassName.Button);

		if (color) {
			classList.push(Constants.PrefixClassName.Color + color);
		}

		if (link) {
			onClickFn = (e) => {
				e.preventDefault();
				e.stopPropagation();

				this.props.onLinkFn(link);
			};
		}

		return <a className={classnames(classList)} onClick={onClickFn}>{children}</a>;
	}
}

Button.propTypes = {
	/** @ignore */
	children: PropTypes.node,
	/**
	 * Textual color definition
	 */
	color:    PropTypes.oneOf(['primary']),
	link:     PropTypes.string,
	/** @ignore */
	onLinkFn: PropTypes.func,
};
