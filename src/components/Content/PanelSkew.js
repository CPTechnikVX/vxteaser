import React      from 'react';
import PropTypes  from 'prop-types';
import Constants  from '../../utils/Constants';
import classnames from 'classnames';
import ClickEvent from '../../utils/ClickEvent';

/**
 * Skewed panel
 */
export default class PanelSkew extends React.PureComponent {
	render() {
		const {config, link, modifier, src, windowWidth} = this.props;
		const classList                                  = [];
		const styleObj                                   = {};
		let onClickFn;

		classList.push(Constants.ClassName.PanelSkew);

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
			styleObj.top = `-${config.fixedHeights[1]['height']}px`;
		}

		return <a className={classnames(classList)} onClick={onClickFn} style={styleObj}>
			<img className="vxteaser-panel--skew__image" src={src} alt="" />
		</a>;
	}
}

PanelSkew.propTypes = {
	/** @ignore */
	config:      PropTypes.object,
	/** @ignore */
	children:    PropTypes.node,
	/**
	 * Textual color definition
	 */
	color:       PropTypes.oneOf(['primary']),
	link:        PropTypes.string,
	modifier:    PropTypes.string,
	/** @ignore */
	onClickFn:    PropTypes.func,
	src:         PropTypes.string,
	/** @ignore */
	windowWidth: PropTypes.number,
};
