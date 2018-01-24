import React          from 'react';
import PropTypes      from 'prop-types';
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
		const config          = this.props.config;
		const color           = this.props.config.color ? this.props.config.color : 'white';
		const backgroundColor = this.props.config.backgroundColor ? this.props.config.backgroundColor : '#262728';
		const windowWidth     = this.props.windowWidth;

		let BannerElement;
		let BannerContent;
		if (this.props.config.template === 'fixedHeight') {
			const fixedHeights = this.props.config.fixedHeights;

			BannerElement = ElementFactory.getBanner({color, backgroundColor, fixedHeights, windowWidth});
		}

		const childrenWithProps = React.Children.map(this.props.children,
			(child) => {
				return React.cloneElement(child, {
					windowWidth: windowWidth,
				});
			}
		);

		return (
			<BannerElement onClick={this.onBannerClick} className="teaser-banner">
				{childrenWithProps}
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
