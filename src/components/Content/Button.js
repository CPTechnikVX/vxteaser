import React      from 'react';
import PropTypes  from 'prop-types';
import Constants  from '../../utils/Constants';
import classnames from 'classnames';
import ClickEvent from '../../utils/ClickEvent';

/**
 * General button element
 */
export default class Button extends React.PureComponent {
	render() {
		const {children, color, link, modifier} = this.props;
		const classList                         = [];
		let onClickFn;

		classList.push(Constants.ClassName.Button);

		if (color) {
			classList.push(Constants.PrefixClassName.BackgroundColor + color);
		}

		if (link) {
			onClickFn = (e) => {
				e.preventDefault();
				e.stopPropagation();

				this.props.onClickFn(new ClickEvent(e, this, {
					link: this.props.link,
				}));
			};
		}

		if (modifier) {
			classList.push(modifier);
		}

		return <a className={classnames(classList)} onClick={onClickFn}>{children}</a>;
	}
}

Button.propTypes = {
	/** @ignore */
	children:  PropTypes.node,
	/**
	 * Textual color definition
	 */
	color:     PropTypes.oneOf(['primary']),
	link:      PropTypes.string,
	modifier:  PropTypes.string,
	/** @ignore */
	onClickFn: PropTypes.func,
};
