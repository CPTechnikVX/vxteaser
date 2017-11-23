import React from 'react';
import HtmlToReact from 'html-to-react';
import {StyledElementFactory} from "./StyledElementFactory";

const ComponentsMapping = {
	vxheadline: (args) => StyledElementFactory.getHeadline(args),
	vxcaption:  (args) => StyledElementFactory.getCaption(args),
	vxtext:     (args) => StyledElementFactory.getText(args),
	vxbutton:   (args) => StyledElementFactory.getButton(args),
	vxcontent:  (args) => StyledElementFactory.getBannerContent(args),
};

export default class Processor {
	static processHTMLtoReact(html, config = {}, props = {}) {
		let i = 0;

		// Order matters. Instructions are processed in the order they're defined
		const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
		const processingInstructions = [
			{
				shouldProcessNode: function(node) {
					return node && node.name === 'vxbutton';
				},
				processNode:       function(node, children) {
					let attrs    = node.attribs || {};
					attrs.config = config;

					const elAttrs = node.attribs;
					elAttrs.style = null;

					return React.createElement(ComponentsMapping[node.name]({...attrs}), {
						onClick: props.onButtonClick,
						key:     i++, ...elAttrs
					}, children);
				}
			},
			{
				shouldProcessNode: function(node) {
					return node && node.name && typeof ComponentsMapping[node.name] !== 'undefined';
				},
				processNode:       function(node, children) {
					let attrs    = node.attribs || {};
					attrs.config = config;
					return React.createElement(ComponentsMapping[node.name]({...attrs}), {children, key: i++});
				}
			},
			{
				// Anything else
				shouldProcessNode: function(node) {
					return true;
				},
				processNode:       processNodeDefinitions.processDefaultNode
			}
		];

		const htmlToReactParser = new HtmlToReact.Parser();

		return htmlToReactParser.parseWithInstructions(html, () => true, processingInstructions);
	}
}
