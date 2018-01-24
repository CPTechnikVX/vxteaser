import React from 'react';
import Banner from '../components/Banner';
import Processor from './Processor';

function BannerBuilder(config, bannerProps) {
//	config.json = JSON.parse('{"panel":{"0":{"row":{"0":{"col":{"headline":{"0":{"text":{"@value":"SexyVany","@attributes":{"color":"hightlight"}}},"1":{"text":"- Deutschlands j\u00fcngstes Camgirl"},"@attributes":{"size":"2.6rem"}}}},"1":{"col":{"text":{"@value":"EXKLUSIV AUF VISIT-X!","@attributes":{"type":"headline"}}}},"@attributes":{"cols":"2"}}},"1":{"row":{"text":"Schau Dir hier unzensierte Bilder und Videos von der s\u00fc\u00dfen 18 j\u00e4hrigen an oder besuche sie bis zu 17 Stunden am Tag im Livechat."}},"2":{"row":{"link":{"@value":"Zum Profil","@attributes":{"type":"button","color":"primary","url":"vxjump:SexyVany"}}}},"@attributes":{"type":"SCH\u00c4\u00c4\u00c4EGE"}}}');
	const contentDOM = Processor.processJSONToReact(config, bannerProps);

	return <Banner config={config} {...bannerProps} key={config.id}>{contentDOM}</Banner>;
}

export {
	BannerBuilder,
};
