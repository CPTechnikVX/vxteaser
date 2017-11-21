import React from 'react';
import ReactDOMServer from 'react-dom/server';
import styled from 'styled-components';
import Banner from './Banner';
import Parser from 'html-react-parser';

class Text extends React.PureComponent {
	render() {
		return <div className="text">{this.props.children}</div>;
	}
}

class Headline extends React.PureComponent {
	render() {
		const el = styled.div`
color: red;
`;

		return <el>{this.props.children}</el>;
	}
}

class BannerBuilder extends React.PureComponent {

	render() {
		const testHTML = '<div class="row">Hallo xxx, {Caption:test} {Headline:HEADLINE}</div>';
		const reactStringReplace = require('react-string-replace')
		const outputHTML = testHTML.replace(/\{([^}]+)\}/ig, (match, repl, pos, origStr) => {
			const spl = repl.split(':');

			let out;
			if (spl[0] === 'Caption') {
				out = ReactDOMServer.renderToString(<Text>{spl[1]}</Text>);
			} else if(spl[0] === 'Headline') {
				out = ReactDOMServer.renderToString(<Headline>{spl[1]}</Headline>);
			}
			return out;
		});

//		const resultDOM = configs.map((config) => {
//			const contentDOM = config.reduce((acc, item) => {
//				acc.push(getComponent(item));
//				return acc;
//			}, []);
//
//			return <Banner config={bannerConfig}>{contentDOM}</Banner>;
//		});

		return <div style={{color: 'white'}} dangerouslySetInnerHTML={{ __html: outputHTML}}></div>;

	}
}

export default BannerBuilder;