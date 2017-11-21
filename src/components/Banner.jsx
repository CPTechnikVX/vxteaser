import React from 'react';
import styled from 'styled-components';
import Button from './Button';

function Caption(props) {
	const CaptionElement = styled.div`    
			font-family: 'Roboto Condensed';
		    font-size: 2.6rem;
		    white-space: nowrap;
		`;

	return <CaptionElement>{props.config.text}</CaptionElement>;
}

function Headline(props) {
	const HeadlineElement = styled.div`
		    font-size: 4.5rem;
		    font-family: 'Roboto Condensed';
		    padding-bottom: 10px;
		    padding-top: 5px;
		    font-weight: bold;
		`;

	return <HeadlineElement>{props.config.text}</HeadlineElement>;
}

class Banner extends React.PureComponent {

	onBannerClick = (event) => {
		event.preventDefault();
		event.stopPropagation();

		alert('Banner clicked');
	};

	onButtonClick = (event) => {
		event.preventDefault();
		event.stopPropagation();

		alert('Teaser button clicked');
	};

	render() {
		const color           = 'white';
		const backgroundColor = '#262728';
		const backgroundUrl   = this.props.config.backgroundUrl ? this.props.config.backgroundUrl : '';

		let BannerElement;
		if (this.props.config.type === 'fixedHeight') {
			const fixedHeights = this.props.config.fixedHeights;

			BannerElement = styled.div`
				position:   relative;
				overflow:   hidden;
				width:      1300px;
				max-width:  100%;
				height:     ${fixedHeights[1]['height']}px;
				color:      ${color};
				background: ${backgroundColor} no-repeat url('${backgroundUrl}') top right;
				background-size: contain;
				
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
	            }
			`;
		}

		const BannerContent = styled.div`
			position: relative;
			padding: 2.5em 0 2.5em 2.5em;
			
			@media (max-width: 1200px) {
                margin-top: 260px;
                text-align: center;
            }
		`;

		const TextElement = styled.div`
		    font-size: 1.5rem;
		    line-height: 1.2;
		`;

		const ButtonContainer = styled.div`
			padding-top: 2em;
		`;

		return (
			<BannerElement onClick={this.onBannerClick} className="teaser-banner">
				<BannerContent>
					{this.props.children}
				</BannerContent>
				{/*<BannerContent>*/}
				{/*<Caption config={{text: this.props.config.title}}></Caption>*/}
				{/*<Headline config={{text: this.props.config.headline}}></Headline>*/}
				{/*<TextElement>*/}
				{/*Schau Dir hier unzensierte Bilder und Videos von der süßen 18 jährigen<br />*/}
				{/*an oder besuche sie bis zu 17 Stunden am Tag im Livechat.*/}
				{/*</TextElement>*/}
				{/*<ButtonContainer>*/}
				{/*<Button onClick={this.onButtonClick}>Zum Profil</Button>*/}
				{/*</ButtonContainer>*/}
				{/*</BannerContent>*/}
			</BannerElement>
		);

	}
}

Banner.defaultProps = {
	config: {},
};

export default Banner;