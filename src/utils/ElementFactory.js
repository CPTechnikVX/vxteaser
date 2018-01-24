import React          from 'react';
import Constants      from './Constants';
import Banner         from '../components/Content/Banner';
import Link           from '../components/Content/Link';
import Headline       from '../components/Content/Headline';
import Panel          from '../components/Content/Panel';
import Text           from '../components/Content/Text';
import Row            from '../components/Content/Row';
import Column         from '../components/Content/Column';
import PanelGroup     from '../components/Content/PanelGroup';
import SkewPanelGroup from '../components/Content/SkewPanelGroup';
import BannerContent  from '../components/Content/BannerContent';
import Button         from '../components/Content/Button';

export default class ElementFactory {

	static getForName({name, attrs, children, config, props}) {
		switch (name) {
			case Constants.Element.Column:
				return <Column {...attrs}>{children}</Column>;
			case Constants.Element.Headline:
				return <Headline {...attrs}>{children}</Headline>;
			case Constants.Element.Button:
				return <Button {...attrs}>{children}</Button>;
			case Constants.Element.Link:
				return <Link {...attrs}>{children}</Link>;
			case Constants.Element.Text:
				return <Text {...attrs}>{children}</Text>;
			case Constants.Element.Panel:
				return <Panel {...attrs} config={config}>{children}</Panel>;
			case Constants.Element.PanelGroup:
				return <PanelGroup {...attrs}>{children}</PanelGroup>;
			case Constants.Element.Row:
				return <Row {...attrs}>{children}</Row>;
			case Constants.Element.SkewPanelGroup:
				return <SkewPanelGroup {...attrs}>{children}</SkewPanelGroup>;
			case Constants.Element.Content:
				return <BannerContent {...attrs} config={config}>{children}</BannerContent>;
			case Constants.Element.Banner:
				return <Banner {...attrs} config={config} {...props}>{children}</Banner>;
			case 'panelskewbutton':
				return <a href="/de/kategorien/31-hotties/" className="btn--icon -icon-arrow-right-full--after teaser__skew-button">{children}</a>;
			case 'container':

				const styleObj = {};

				if (props.windowWidth < config.fixedHeights[1]['greaterThan']) {
					styleObj.top = attrs.valign === 'top' ? `-${config.fixedHeights[1]['height']}px` : 0;
				}

				return <div className={'teaser__skew-container'} style={styleObj}>
					{children}
				</div>;
			case 'panelskew':
				return <div className={'teaser__skew'}><img className="teaser__skew-image" src={attrs.src} alt="" /></div>;
			default:
				return <span {...attrs}>{children}</span>;
		}
	}
}
