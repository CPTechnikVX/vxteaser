import Processor from './Processor';

/**
 * Banner builder function
 * @param bannerConfig
 * @param bannerProps
 * @constructor
 */
export default function BannerBuilder(bannerConfig, bannerProps) {
	const {content, ...config} = bannerConfig;

	return Processor.processJSONToReact(content, config, bannerProps);
}
