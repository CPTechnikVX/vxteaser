import styled from 'styled-components';

const classNames = {
	TeaserSuite:     'teaser-suite',
	TeaserSuiteItem: 'teaser-suite-item',
	TeaserPoint:     'teaser-point',
};

export default class StyledElementFactory {

	static getCaption({style}) {
		return styled.div`    
			font-family: 'Roboto Condensed';
		    font-size: 2.6rem;
		    font-weight: 300;
		    white-space: nowrap;
	        ${style ? style : ''}
		`;
	}

	static getHeadline({style, size}) {
		return styled.div`
			font-size: ${size ? size : '4rem'};
			font-family: 'Roboto Condensed';
			padding-bottom: 10px;
			padding-top: 5px;
			font-weight: bold;
			${style ? style : ''}
		`;
	}

	static getText({style}) {
		return styled.div`
			font-size: 1.5rem;
			line-height: 1.2;
			${style ? style : ''}
		`;
	}

	static getButton({style}) {
		return styled.button`
		    color: #FFFFFF;    	    
			border-radius: 2px;
		    border: 1px solid #1F93E9;
		    background-color: #1F93E9;
			display: inline-block;
		    font-family: 'Roboto';
		    font-size: 1.4rem;
		    font-weight: normal;
		    padding: 0.65em 1em 0.55em;
		    cursor: pointer;
		    min-width: 50px;
		    position: relative;
		    text-align: left;
		    text-decoration: none;
	        text-transform: none;
		    transition: all 0.15s linear;
		    vertical-align: top;
		    ${style ? style : ''}
		`;
	}

	static getTeaserPoint() {
		return styled.div`
		    border: 1px solid #F1F1F1;
		    border-radius: 100%;
		    cursor: pointer;
		    display: block;
		    height: 8px;
		    opacity: 1;
		    width: 8px;
		    z-index: 9999;
		    margin-bottom: 10px;
		`;
	}

	static getTeaserPointContainer({fixedHeights}) {
		return styled.div`
			font-size: 2rem;
			position: absolute;
			transform: translateY(-50%);
			top: 50%;
			right: 1em;
			color: red;
			z-index: 9999;
			
			.${classNames.TeaserPoint} {
				background-color: transparent;			    
			}

			.${classNames.TeaserPoint}.is-active {
				background-color: #F1F1F1; 				
			}
			
			@media (max-width: ${fixedHeights[1]['greaterThan']}px) {
                width: 100%;
                top: auto;
				right: auto;
                bottom: -10px;
                text-align: center;
                margin-bottom: 0;
                
                .teaser-point {
                    display: inline-block;
                    margin-right: 10px;
                }
            }
		`;
	}

	static getSuiteItem() {
		return styled.div`
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
        `;
	}

	static getSuite({fixedHeights}) {
		return styled.div`
			position: relative;
			margin: 0;
			padding: 0;
			width: 1300px;
			max-width: 100%;
			height:     ${fixedHeights[1]['height']}px;

			.${classNames.TeaserSuiteItem} {
				visibility: hidden;
				opacity: 0;
				z-index: 0;
				transition: opacity 2s;
			}

			.${classNames.TeaserSuiteItem}.is-active {
				visibility: visible;
				opacity: 1;
				z-index: 9999;
				transition: opacity 1.2s;
			}

			@media (max-width: ${fixedHeights[1]['greaterThan']}px) {
                height: ${fixedHeights[0]['height']}px;
            }
		`;
	}

	static getBanner({color, backgroundColor, backgroundUrl, fixedHeights}) {
		return styled.div`
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
	}

	static getBannerContent({style, config}) {
		return styled.div`
			position: relative;
			padding: 2.5em 2.5em 2.5em 2.5em;
			
			@media (max-width: ${config.fixedHeights[1]['greaterThan']}px) {
				height:     ${config.fixedHeights[1]['height']}px;
                margin-top: ${config.fixedHeights[1]['height']}px;
                text-align: center;
                background-color: ${config.backgroundColor}; 
            }
            ${style ? style : ''}
		`;
	}
}

export {
	classNames,
	StyledElementFactory,
};
