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
			styleObj.height    = `${config.fixedHeights[1]['height'] - 10}px`;
			styleObj.marginTop = `${config.fixedHeights[1]['height'] - 10}px`;
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
