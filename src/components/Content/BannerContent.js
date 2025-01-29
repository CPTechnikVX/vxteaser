import React      from 'react';
import Constants  from '../../utils/Constants';
import classnames from 'classnames';
import PropTypes  from 'prop-types';

/**
 * Content of the banner
 */
export default class BannerContent extends React.PureComponent {
	render() {
		const {children, config, windowWidth} = this.props;
		const classList                       = [];
		const styleObj                        = {};
		config.width                          = undefined;
		let newMarginTop                      = 0;

		if (windowWidth < config.fixedHeights[1]['greaterThan']) {
			const newHeight    = Math.max(config.fixedHeights[0]['height'] / 2, config.fixedHeights[1]['height'] - 10);
			newMarginTop = Math.max(0, config.fixedHeights[0]['height'] - newHeight);

			styleObj.height    = `${newHeight}px`;
			styleObj.marginTop = `${newMarginTop}px`;
			styleObj.textAlign = 'center';
			config.width       = '100%';
		}

		// addon bottom right?
		let addonBlock = null;
		if (config.onHook) {
			const bottomRight = config.onHook ? config.onHook({type: Constants.HookType.RenderBottomRight, config}) : null;
			if (bottomRight) {
				addonBlock = <div className="vxteaser-hook__bottom-right" style={{bottom: newMarginTop}}>{bottomRight}</div>;
			}
		}

		return <div className={classnames(Constants.ClassName.BannerContent, classList)} style={styleObj}>
			<div className={Constants.ClassName.BannerContentInner}>{children}</div>
			{addonBlock}
		</div>;
	}
}

BannerContent.propTypes = {
	/** @ignore */
	config: PropTypes.object,
	/** @ignore */
	children: PropTypes.node,
	/** @ignore */
	windowWidth: PropTypes.number,
};
