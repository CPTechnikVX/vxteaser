import React      from 'react';
import PropTypes  from 'prop-types';
import Constants  from '../../utils/Constants';
import classnames from 'classnames';
import ClickEvent from '../../utils/ClickEvent';

/**
 * Skewed button for skewed panel
 */
export default class PanelSkewButton extends React.PureComponent {
	render() {
		const {children, config, link, modifier, windowWidth} = this.props;
		const classList                                       = [];
		const styleObj                                        = {};
		let onClickFn;

		classList.push(Constants.ClassName.PanelSkewButton);

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

		if (windowWidth < config.fixedHeights[1]['greaterThan']) {
			styleObj.top = `-${config.fixedHeights[1]['height'] / 2.71}px`;
		}

		return <a className={classnames(classList)} onClick={onClickFn} style={styleObj}>{children}</a>;
	}
}

PanelSkewButton.propTypes = {
	/** @ignore */
	children:    PropTypes.node,
	/** @ignore */
	config:      PropTypes.object,
	/**
	 * Textual color definition
	 */
	color:       PropTypes.oneOf(['primary']),
	link:        PropTypes.string,
	modifier:    PropTypes.string,
	/** @ignore */
	onClickFn:   PropTypes.func,
	/** @ignore */
	windowWidth: PropTypes.number,
};
