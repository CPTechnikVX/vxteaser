import React        from 'react';
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
	for (let i = 0; i < properties.length; i++) {
		const property           = properties[i][0];
		const value              = properties[i][1];
		style[cssToJs(property)] = value
	}
	return {cssText, ruleName, style};
}

class Panel extends React.PureComponent {
	render() {
		const styleObj = {
			width: this.props.config.width ? this.props.config.width : this.props.width,
		};

		return <div className="teaser-panel" style={styleObj}>{this.props.children}</div>;
	}
}

class SkewPanelGroup extends React.PureComponent {
	render() {
		const skewStyleObj = {
			width:           this.props.skewWidth,
			color:           this.props.skewColor,
			backgroundColor: this.props.skewBackgroundColor,
		};

		return <div className="teaser-panel-group">
			<div className="teaser-skew" style={skewStyleObj} />
			{this.props.children}</div>;
	}
}

class PanelGroup extends React.PureComponent {
	render() {
		return <div className="teaser-panel-group">{this.props.children}</div>;
	}
}

class Headline extends React.PureComponent {
	render() {
		const styleObj = {};

		if (this.props.size) {
			styleObj.fontSize = this.props.size;
		}

		if (this.props.fontWeight) {
			styleObj.fontWeight = this.props.fontWeight;
		}

		return <div className="teaser-title" style={styleObj}>{this.props.children}</div>;
	}
}

class Text extends React.PureComponent {
	render() {
		let className = '';

		if (this.props.color) {
			className += '-color-' + this.props.color;
		}

		return <span className={className}>{this.props.children}</span>;
	}
}

class Link extends React.PureComponent {
	render() {
		let className = '';
		let onClick;

		if (this.props.type === 'button') {
			className = 'teaser-button';
		}

		if (typeof this.props.url !== 'undefined') {
			onClick = (e) => {
				alert('Redirect to:' + this.props.url);
			};
		}

		return <a className={className} onClick={onClick}>{this.props.children}</a>;
	}
}

class BannerContent extends React.PureComponent {
	render() {
		const config      = this.props.config;
		const windowWidth = this.props.windowWidth;
		config.width      = undefined;
		const styleObj    = {
			color: this.props.color,
		};

		if (windowWidth < config.fixedHeights[1]['greaterThan']) {
			styleObj.height          = `${config.fixedHeights[1]['height'] - 10}px`;
			styleObj.marginTop       = `${config.fixedHeights[1]['height'] - 10}px`;
			styleObj.textAlign       = 'center';
			styleObj.backgroundColor = this.props.backgroundColor;
			config.width             = '100%';
		}

		return <div className={classNames.TeaserBannerContent} style={styleObj}>
			<div className={classNames.TeaserBannerContentInner}>{this.props.children}</div>
		</div>;
	}
}

export default class ElementFactory {

	static getForName(name, attrs, children, config, props) {
		switch (name) {
			case 'col':
				return <div className={'col-xs-12'} {...attrs}>{children}</div>;
			case 'headline':
				return <Headline {...attrs}>{children}</Headline>;
			case 'link':
				return <Link {...attrs}>{children}</Link>;
			case 'text':
				return <Text {...attrs}>{children}</Text>;
			case 'panel':
				return <Panel {...attrs} config={config} pp={props}>{children}</Panel>;
			case 'panelgroup':
				return <PanelGroup {...attrs}>{children}</PanelGroup>;
			case 'row':
				return <div className={'row'} {...attrs}>{children}</div>;
			case 'skewpanelgroup':
				return <SkewPanelGroup {...attrs}>{children}</SkewPanelGroup>;
			case 'content':
				return <BannerContent {...attrs} config={config}>{children}</BannerContent>;
			default:
				return <div {...attrs}>{children}</div>;
		}
	}

	static getButton({style}) {
		const parsedCss = parseCSSText(style);
		const styleObj  = parsedCss && parsedCss.style ? parsedCss.style : {};

		return (props) => <button className={classNames.TeaserButton} style={styleObj}>{props.children}</button>;
	}

	static getSuiteItem() {
		return (props) => <div {...props}>{props.children}</div>;
	}

	static getSuite({fixedHeights, windowWidth}) {
		const styleObj = {
			height: `${fixedHeights[1]['height']}px`
		};

		if (windowWidth < fixedHeights[1]['greaterThan']) {
			styleObj.height = `${fixedHeights[0]['height']}px`;
		}

		return (props) => <div className={classNames.TeaserSuite} style={styleObj}>{props.children}</div>;
	}

	static getBanner({color, fixedHeights, windowWidth}) {
		const styleObj = {
			height:         `${fixedHeights[1]['height']}px`,
			color:          `${fixedHeights[0]['color']}`,
			background:     `no-repeat url('${fixedHeights[0]['backgroundUrl']}') top right`,
			backgroundSize: `${fixedHeights[1]['backgroundSize'] ? fixedHeights[1]['backgroundSize'] : 'contain'}`,
		};

		let className = classNames.TeaserBanner;
		if (windowWidth < fixedHeights[1]['greaterThan']) {
			styleObj.background      = `no-repeat url('${fixedHeights[1]['backgroundUrl']}') top right`;
			styleObj.backgroundColor = fixedHeights[1]['backgroundColor'];
			styleObj.backgroundSize  = `${fixedHeights[0]['backgroundSize'] ? fixedHeights[0]['backgroundSize'] : 'contain'}`;
			styleObj.height          = `${fixedHeights[0]['height']}px`;
			styleObj.height          = `${fixedHeights[0]['height']}px`;
			className                = classNames.TeaserBannerNoSkew;
		}

		return (props) => <div className={className} style={styleObj}>{props.children}</div>;
	}
}

export {
	classNames,
	ElementFactory,
};
