import React           from 'react';
import {storiesOf}     from '@storybook/react';
import {action}        from '@storybook/addon-actions';
import BannerSuite     from '../src/components/BannerSuite';
import {BannerBuilder} from '../src/utils/Builder';
import ProviderMock    from '../src/components/ProviderMock';

function DesktopWrapper(children) {
	const style = {
		width:    '1300px',
		maxWidth: '100%',
	};

	return <div style={style}>{children}</div>;
}

storiesOf('BannerSuite', module)
	.add('standard', () => {

		const config = {};

		return DesktopWrapper(<ProviderMock config={config}>
			<BannerSuite className={config.bannerSuiteClassName ? config.bannerSuiteClassName : ''} />
		</ProviderMock>);
	});


