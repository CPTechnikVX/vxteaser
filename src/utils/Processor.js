import React from 'react';
import HtmlToReact from 'html-to-react';
import ElementFactory from "./ElementFactory";

const ComponentsMapping = {
	vxbutton:  (args) => ElementFactory.getButton(args),
	vxcontent: (args) => ElementFactory.getBannerContent(args),
};

if (typeof Object.assign != 'function') {
	Object.assign = function(target) {
		'use strict';
		if (target == null) {
			throw new TypeError('Cannot convert undefined or null to object');
		}

		target = Object(target);
		for (var index = 1; index < arguments.length; index++) {
			var source = arguments[index];
			if (source != null) {
				for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}
		}
		return target;
	};
}

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
					const attrs  = node.attribs || {};
					attrs.config = config;

					const elAttrs = Object.assign({}, node.attribs);
					elAttrs.style = null;

					return React.createElement(ComponentsMapping[node.name]({...attrs}), {
						onClick: props.onButtonClick, // eslint-disable-line
						key:     i++, ...elAttrs,
					}, children);
				},
			},
			{
				shouldProcessNode: function(node) {
					return node && node.name === 'vxcontent';
				},
				processNode:       function(node, children) {
					const attrs       = node.attribs || {};
					attrs.config      = config;
					attrs.windowWidth = props.windowWidth; // eslint-disable-line
					return React.createElement(ComponentsMapping[node.name]({...attrs}), {children, key: i++});
				},
			},
			{
				// Anything else
				shouldProcessNode: function() {
					return true;
				},
				processNode:       processNodeDefinitions.processDefaultNode,
			},
		];

		const htmlToReactParser = new HtmlToReact.Parser();

		return htmlToReactParser.parseWithInstructions(html, () => true, processingInstructions);
	}
}
