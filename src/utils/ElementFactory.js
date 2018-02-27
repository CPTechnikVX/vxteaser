import React           from 'react';
import Constants       from './Constants';
import Banner          from '../components/Content/Banner';
import Link            from '../components/Content/Link';
import Headline        from '../components/Content/Headline';
import Panel           from '../components/Content/Panel';
import Text            from '../components/Content/Text';
import Row             from '../components/Content/Row';
import Column          from '../components/Content/Column';
import PanelGroup      from '../components/Content/PanelGroup';
import SkewPanelGroup  from '../components/Content/SkewPanelGroup';
import Button          from '../components/Content/Button';
import PanelSkewButton from '../components/Content/PanelSkewButton';
import PanelSkew       from '../components/Content/PanelSkew';

export default class ElementFactory {

	/**
	 * Generate react element for given node
	 * @param name
	 * @param attrs
	 * @param children
	 * @param config
	 * @param props
	 * @param stats
	 * @returns {*}
	 */
	static getForName({name, attrs, children, config, props, stats}) {
		switch (name) {
			case Constants.Element.Banner:
				return <Banner {...attrs} config={config} {...props}>{children}</Banner>;
			case Constants.Element.Break:
				return <br />;
			case Constants.Element.Button:
				return <Button {...attrs}>{children}</Button>;
			case Constants.Element.Column:
				return <Column {...attrs}>{children}</Column>;
			case Constants.Element.Headline:
				return <Headline {...attrs}>{children}</Headline>;
			case Constants.Element.Link:
				return <Link {...attrs}>{children}</Link>;
			case Constants.Element.Panel:
				return <Panel {...attrs} config={config} {...props}>{children}</Panel>;
			case Constants.Element.PanelGroup:
				return <PanelGroup {...attrs}>{children}</PanelGroup>;
			case Constants.Element.PanelSkew:
				attrs.modifier = (attrs.modifier ? attrs.modifier + ' ' : '') + Constants.PrefixClassName.NthOfClass + stats.nthOfType;

				return <PanelSkew {...attrs} config={config} {...props}>{children}</PanelSkew>;
			case Constants.Element.PanelSkewButton:
				attrs.modifier = (attrs.modifier ? attrs.modifier + ' ' : '') + Constants.PrefixClassName.NthOfClass + stats.nthOfType;

				return <PanelSkewButton {...attrs} config={config} {...props}>{children}</PanelSkewButton>;
			case Constants.Element.Row:
				return <Row {...attrs}>{children}</Row>;
			case Constants.Element.SkewPanelGroup:
				const countPanelSkew = config.stats[stats.level + 1] ? config.stats[stats.level + 1]['panelskew'] : null;

				return <SkewPanelGroup {...attrs} modifier={(countPanelSkew ? ' -has-panelskew-' + countPanelSkew : '')}>{children}</SkewPanelGroup>;
			case Constants.Element.Text:
				return <Text {...attrs}>{children}</Text>;
			/* default handler for not supported elements */
			default:
				let className;

				if (attrs.modifier) {
					className = attrs.modifier;
				}

				return <span className={className} {...attrs}>{children}</span>;
		}
	}
}
