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
		const {children, color, config, link, modifier, theme} = this.props;
		const classList                                        = [Constants.ClassName.Button];
		let onClickFn;

		if (color) {
			classList.push(Constants.PrefixClassName.BackgroundColor + color);
		}

		if (theme) {
			classList.push('-theme-' + theme);
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

		if (config && typeof config.aspectRatio !== 'undefined') {
			classList.push(Constants.ClassName.Button + '--' + Constants.Element.Tile);
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
	color:     PropTypes.oneOf(['green', 'primary', 'white']),
	/** @ignore */
	config:    PropTypes.object,
	link:      PropTypes.string,
	modifier:  PropTypes.string,
	/** @ignore */
	onClickFn: PropTypes.func,
	theme:     PropTypes.string,
};
