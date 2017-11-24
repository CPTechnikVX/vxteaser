import React from 'react';
import PropTypes from 'prop-types';
import ElementFactory from '../utils/ElementFactory';

export default class Banner extends React.PureComponent {

	constructor(props) {
		super(props);

		// bind
		this.onBannerClick = this.onBannerClick.bind(this);
	}

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

		let BannerElement;
		if (this.props.config.template === 'fixedHeight') {
			const fixedHeights = this.props.config.fixedHeights;

			const windowWidth = this.props.windowWidth;
			BannerElement     = ElementFactory.getBanner({color, backgroundColor, fixedHeights, windowWidth});
		}

		return (
			<BannerElement onClick={this.onBannerClick} className="teaser-banner">
				{this.props.children}
			</BannerElement>
		);

	}
}

Banner.propTypes = {
	config:        PropTypes.object,
	children:      PropTypes.node,
	onBannerClick: PropTypes.func,
	windowWidth:   PropTypes.number,
};

Banner.defaultProps = {
	config:      {},
	windowWidth: window.innerWidth,
};
