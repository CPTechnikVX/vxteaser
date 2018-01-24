import React      from 'react';
import Constants  from '../../utils/Constants';
import classnames from 'classnames';

export default class BannerContent extends React.PureComponent {
	render() {
		const config      = this.props.config;
		const windowWidth = this.props.windowWidth;
		config.width      = undefined;
		const classList   = [];
		const styleObj    = {
			color: this.props.color,
		};

		if (windowWidth < config.fixedHeights[1]['greaterThan']) {
			styleObj.height    = `${config.fixedHeights[1]['height'] - 10}px`;
			styleObj.marginTop = `${config.fixedHeights[1]['height'] - 10}px`;
			styleObj.textAlign = 'center';
			config.width       = '100%';
			classList.push(Constants.PrefixClassName.BackgroundColor + this.props.backgroundColor);
		}

		return <div className={classnames(Constants.ClassName.BannerContent, classList)} style={styleObj}>
			<div className={Constants.ClassName.BannerContentInner}>{this.props.children}</div>
		</div>;
	}
}
