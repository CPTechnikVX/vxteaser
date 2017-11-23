import React from 'react';
import Banner from '../components/Banner';
import Processor from './Processor';

function BannerBuilder(config, bannerProps = {}) {
	const contentDOM = Processor.processHTMLtoReact(config.htmlText, config);

	return <Banner config={config} {...bannerProps}>{contentDOM}</Banner>;
}

export {
	BannerBuilder,
};
