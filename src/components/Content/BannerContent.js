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

		if (windowWidth < config.fixedHeights[1]['greaterThan']) {
			const newHeight    = Math.max(config.fixedHeights[0]['height'] / 2, config.fixedHeights[1]['height'] - 10);
			const newMarginTop = Math.max(0, config.fixedHeights[0]['height'] - newHeight);

			styleObj.height    = `${newHeight}px`;
			styleObj.marginTop = `${newMarginTop}px`;
			styleObj.textAlign = 'center';
			config.width       = '100%';
		}

		return <div className={classnames(Constants.ClassName.BannerContent, classList)} style={styleObj}>
			<div className={Constants.ClassName.BannerContentInner}>{children}</div>
		</div>;
	}
}

BannerContent.propTypes = {
	/** @ignore */
	config:      PropTypes.object,
	/** @ignore */
	children:    PropTypes.node,
	/** @ignore */
	windowWidth: PropTypes.number,
};
