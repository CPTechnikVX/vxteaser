import React from 'react';
import styled from 'styled-components';
import HtmlToReact from 'html-to-react';

function Caption(props) {
	const CaptionElement = styled.div`    
		font-family: 'Roboto Condensed';
	    font-size: 2.6rem;
	    font-weight: 300;
	    white-space: nowrap;
        ${props.style ? props.style : ''}
	`;

	return <CaptionElement>{props.children}</CaptionElement>;
}

function Headline(props) {
	const HeadlineElement = styled.div`
		font-size: ${props.size ? props.size : '4rem'};
		font-family: 'Roboto Condensed';
		padding-bottom: 10px;
		padding-top: 5px;
		font-weight: bold;
		${props.style ? props.style : ''}
	`;

	return <HeadlineElement>{props.children}</HeadlineElement>;
}

function Text(props) {
	const TextElement = styled.div`
		font-size: 1.5rem;
		line-height: 1.2;
		${props.style ? props.style : ''}
	`;

	return <TextElement>{props.children}</TextElement>;
}

function Button(props) {
	const ButtonElement = styled.button`
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
	    ${props.style ? props.style : ''}
	`;

	return <ButtonElement>{props.children}</ButtonElement>;
}

const ComponentsMapping = {
	vxheadline: Headline,
	vxcaption:  Caption,
	vxtext:     Text,
	vxbutton:   Button,
};

class Processor {
	static processHTMLtoReact(html) {
		// Order matters. Instructions are processed in the order they're defined
		const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
		const processingInstructions = [
			{
				// Custom <Headline> processing
				shouldProcessNode: function(node) {
					return node && node.name && typeof ComponentsMapping[node.name] !== 'undefined';
				},
				processNode:       function(node, children) {
					return React.createElement(ComponentsMapping[node.name], {children: children, ...node.attribs});
				}
			},
			{
				// Anything else
				shouldProcessNode: function(node) {
					return true;
				},
				processNode:       processNodeDefinitions.processDefaultNode
			}];

		const htmlToReactParser = new HtmlToReact.Parser();

		return htmlToReactParser.parseWithInstructions(html, () => true, processingInstructions);
	}
}

export default Processor;
