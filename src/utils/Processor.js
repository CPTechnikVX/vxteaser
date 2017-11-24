import React from 'react';
import HtmlToReact from 'html-to-react';
import ElementFactory from "./ElementFactory";

const ComponentsMapping = {
	vxbutton:  (args) => ElementFactory.getButton(args),
	vxcontent: (args) => ElementFactory.getBannerContent(args),
};

export default class Processor {
	static processHTMLtoReact(html, config = {}, props = {}) {
		let i = 0;
		html  = `
<VXContent>
 <div class="row">
  <div class="col-xs-12">
   <div class="teaser-caption">
    <span style="color: #FF4D3C;">SexyVany</span> - Deutschlands jüngstes Camgirl
   </div>
   <div class="teaser-headline">
    EXKLUSIV AUF VISIT-X!
   </div>
   <div class="teaser-text">
    Schau Dir hier unzensierte Bilder und Videos von der süßen 18 jährigen<br>
    an oder besuche sie bis zu 17 Stunden am Tag im Livechat.
   </div>
  </div>
 </div>
 <div class="row">
  <div class="col-xs-12">
   <div class="teaser__sexyvany-buttoncontainer" style="margin-top: 2em;">
    <VXButton style="padding: 0.7em 5em 0.65em; font-size: 1.7rem;">Zum Profil</VXButton>
   </div>
  </div>
 </div>
</VXContent>		`;

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

					const elAttrs = node.attribs;
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
