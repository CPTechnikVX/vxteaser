import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Banner from '../src/components/Banner';
import Button from '../src/components/Button';
import BannerSuite from '../src/components/BannerSuite';
import BannerBuilder from "../src/components/BannerBuilder2";

storiesOf('BannerBuilder', module)
	.add('standard', () => {
		return <BannerBuilder />;
	})

storiesOf('Banner', module)
	.add('standard', () => {
		const config = {
			title: 'SexyVany - Deutschlands jüngstes Camgirl',
			color: 'white',
			backgroundColor: '#262728',
			backgroundUrl: 'https://www.visit-x.net/assets/img/teaser/sexyvany/teaser-sexyvany.jpg',
		};

		return <Banner {...config} />;
	})
	.add('white', () => {
		const config = {
			title: 'SexyVany - Deutschlands jüngstes Camgirl',
			backgroundUrl: 'https://www.visit-x.net/assets/img/teaser/sexyvany/teaser-sexyvany.jpg',
			backgroundColor: 'white',
		};

		return <Banner config={config} />;
	});

storiesOf('Button', module)
	.add('standard', () => {
		return <Button>Zum Profil</Button>;
	});


