import React from 'react';
import Banner from '../components/Banner';
import Processor from './Processor';

export default function BannerBuilder(config) {
	const contentDOM = Processor.processHTMLtoReact(config.htmlText);

	return <Banner config={config}>{contentDOM}</Banner>;
}
