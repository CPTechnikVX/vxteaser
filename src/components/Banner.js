import React from 'react';
import styled from 'styled-components';

class Banner extends React.PureComponent {

	onBannerClick = (event) => {
		event.preventDefault();
		event.stopPropagation();

		alert('Banner clicked');
	}

	onButtonClick = (event) => {
		event.preventDefault();
		event.stopPropagation();

		alert('Teaser button clicked');
	}

	render() {
		const color           = 'white';
		const backgroundColor = '#262728';
		const backgroundUrl   = this.props.config.backgroundUrl ? this.props.config.backgroundUrl : '';

		let BannerElement, BannerContentElement;
		if (this.props.config.template === 'fixedHeight') {
			const fixedHeights = this.props.config.fixedHeights;

			BannerElement = styled.div`
				position:   relative;
				overflow:   hidden;
				width:      100%;
				max-width:  100%;
				height:     ${fixedHeights[1]['height']}px;
				color:      ${color};
				background: ${backgroundColor} no-repeat url('${backgroundUrl}') top right;
				background-position: ${fixedHeights[1]['backgroundPosition'] ? fixedHeights[1]['backgroundPosition'] : 'initial'};
				background-size: ${fixedHeights[1]['backgroundSize'] ? fixedHeights[1]['backgroundSize'] : 'auto'};
				
				&:before {
					position: absolute;
				    width: 55%;
				    height: 680px;
				    transform: rotate(26deg);
				    content: ' ';
				    top: -90%;
				    left: -9%;			
				    background-color: ${backgroundColor};
					@media (max-width: ${fixedHeights[1]['greaterThan']}px) {
		                display: none;
		            }
				}
				
				@media (max-width: ${fixedHeights[1]['greaterThan']}px) {
	                height: ${fixedHeights[0]['height']}px;
					background-position: ${fixedHeights[0]['backgroundPosition'] ? fixedHeights[0]['backgroundPosition'] : 'initial'};
					background-size: ${fixedHeights[0]['backgroundSize'] ? fixedHeights[0]['backgroundSize'] : 'contain'};
	            }
			`;

			BannerContentElement = styled.div`
				position: relative;
				padding: 2.5em 2.5em 2.5em 2.5em;
				
				@media (max-width: ${fixedHeights[1]['greaterThan']}px) {
					height:     ${fixedHeights[1]['height']}px;
	                margin-top: ${fixedHeights[1]['height']}px;
	                text-align: center;
	                background-color: ${backgroundColor}; 
	            }
			`;
		}

		return (
			<BannerElement onClick={this.onBannerClick} className="teaser-banner">
				<BannerContentElement className="teaser-content">{this.props.children}</BannerContentElement>
			</BannerElement>
		);

	}
}

Banner.defaultProps = {
	config: {},
};

export default Banner;