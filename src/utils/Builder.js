import React     from 'react';
import Processor from './Processor';

export default function BannerBuilder(bannerConfig, bannerProps) {
	const {content, ...config} = bannerConfig;

	return Processor.processJSONToReact(content, config, bannerProps);
}
