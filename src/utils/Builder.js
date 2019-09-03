import Processor from './Processor';

/**
 * Banner builder function
 * @param bannerConfig
 * @param bannerProps
 * @param renderFn
 * @constructor
 */
export default function BannerBuilder(bannerConfig, bannerProps, renderFn) {
	const {content, ...config} = bannerConfig;

	return Processor.processJSONToReact(content, config, bannerProps, renderFn);
}
