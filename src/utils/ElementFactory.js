import React from 'react';
import {classNames} from './Constants';

/**
 * Parse css text into an object
 * @param cssText
 * @returns {{cssText: *, ruleName: null, style: {}}}
 */
function parseCSSText(cssText = '') {
	cssText          = cssText || '';
	const cssTxt     = cssText.replace(/\/\*(.|\s)*?\*\//g, " ").replace(/\s+/g, " ");
	const style      = {}, [, ruleName, rule] = cssTxt.match(/ ?(.*?) ?{([^}]*)}/) || [, , cssTxt];
	const cssToJs    = s => s.replace(/\W+\w/g, match => match.slice(-1).toUpperCase());
	const properties = rule.split(";").map(o => o.split(":").map(x => x && x.trim()));
	for (const [property, value] of properties) style[cssToJs(property)] = value;
	return {cssText, ruleName, style};
}

export default class ElementFactory {

	static getButton({style}) {
		const parsedCss = parseCSSText(style);
		const styleObj  = parsedCss && parsedCss.style ? parsedCss.style : {};

		return (props) => <button className={classNames.TeaserButton} style={styleObj}>{props.children}</button>;
	}

	static getTeaserPoint() {
		return (props) => <div>{props.children}</div>;
	}

	static getTeaserPointContainer() {
		return (props) => <div>{props.children}</div>;
	}

	static getSuiteItem() {
		return (props) => <div>{props.children}</div>;
	}

	static getSuite() {
		return (props) => <div className={classNames.TeaserSuite}>{props.children}</div>;
	}

	static getBanner({color, backgroundColor, fixedHeights, windowWidth}) {
		const styleObj = {
			height:         `${fixedHeights[1]['height']}px`,
			color:          `${color}`,
			background:     `no-repeat url('${fixedHeights[0]['backgroundUrl']}') top right`,
			backgroundSize: `${fixedHeights[1]['backgroundSize'] ? fixedHeights[1]['backgroundSize'] : 'auto'}`,
		};

		let className = classNames.TeaserBanner;
		if (windowWidth < fixedHeights[1]['greaterThan']) {
			styleObj.background = `${backgroundColor} no-repeat url('${fixedHeights[1]['backgroundUrl']}') top right`;
			styleObj.height     = `${fixedHeights[0]['height']}px`;
			styleObj.height     = `${fixedHeights[0]['height']}px`;
			className           = classNames.TeaserBannerNoSkew;
		}

		return (props) => <div className={className} style={styleObj}>{props.children}</div>;
	}

	static getBannerContent({style, config, windowWidth}) {
		const parsedCss = parseCSSText(style);
		const styleObj  = parsedCss && parsedCss.style ? parsedCss.style : {};

		if (windowWidth < config.fixedHeights[1]['greaterThan']) {
			styleObj.height          = `${config.fixedHeights[0]['height']}px`;
			styleObj.marginTop       = `${config.fixedHeights[1]['height']}`;
			styleObj.textAlign       = 'center';
			styleObj.backgroundColor = config.backgroundColor;
		}

		return (props) => <div className={classNames.TeaserBannerContent} style={styleObj}>{props.children}</div>;
	}
}

export {
	classNames,
	ElementFactory,
};
