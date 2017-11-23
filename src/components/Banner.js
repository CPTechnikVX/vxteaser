import React from 'react';
import ElementFactory from '../utils/StyledElementFactory';

export default class Banner extends React.PureComponent {

	onBannerClick = (event) => {
		event.preventDefault();
		event.stopPropagation();

		if (typeof this.props.onBannerClick === 'function') {
			this.props.onBannerClick();
		}
	}

	render() {
		const color           = this.props.config.color ? this.props.config.color : 'white';
		const backgroundColor = this.props.config.backgroundColor ? this.props.config.backgroundColor : '#262728';
		const backgroundUrl   = this.props.config.backgroundUrl ? this.props.config.backgroundUrl : '';

		let BannerElement, BannerContentElement;
		if (this.props.config.template === 'fixedHeight') {
			const fixedHeights = this.props.config.fixedHeights;

			BannerElement = ElementFactory.getBanner({color, backgroundColor, backgroundUrl, fixedHeights});
		}

		return (
			<BannerElement onClick={this.onBannerClick} className="teaser-banner">
				{this.props.children}
			</BannerElement>
		);

	}
}

Banner.propTypes = {
	onBannerClick: React.PropTypes.func,
};

Banner.defaultProps = {
	config: {},
};
