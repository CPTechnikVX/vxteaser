import React from 'react';
import Banner from '../components/Banner';
import Processor from './Processor';

function BannerBuilder(config, bannerProps) {
	const contentDOM = Processor.processHTMLtoReact(config.htmlText, config, bannerProps);

	return <Banner config={config} {...bannerProps} key={config.id}>{contentDOM}</Banner>;
}

export {
	BannerBuilder,
};
