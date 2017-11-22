import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Banner from '../src/components/Banner';
import Button from '../src/components/Button';
import BannerSuite from '../src/components/BannerSuite';
import BannerBuilder from "../src/utils/BannerBuilder";

storiesOf('BannerBuilder', module)
	.add('standard', () => {
		const config = {
			id:            '123456-123456',
				typeId:        'banner',
			type:          'fixedHeight',
			fixedHeights:  [
			{
				greaterThan: 0,
				height:      500,
			},
			{
				greaterThan: 1200,
				height:      260,
			},
		],
			backgroundUrl: 'https://www.visit-x.net/assets/img/teaser/sexyvany/teaser-sexyvany.jpg',
			htmlText:      `
		<div class="teaser__container-content">
			<div class="row">
				<div class="col-xs-12">
					<VXCaption>
						<span style="color: #FF4D3C;">SexyVany</span> - Deutschlands jüngstes Camgirl
					</VXCaption>
					<VXHeadline>
						EXKLUSIV AUF VISIT-X!
					</VXHeadline>
					<VXText>
						Schau Dir hier unzensierte Bilder und Videos von der süßen 18 jährigen<br>
						an oder besuche sie bis zu 17 Stunden am Tag im Livechat.
					</VXText>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12">
					<div class="teaser__sexyvany-buttoncontainer" style="margin-top: 2em;">
						<VXButton style="padding: 0.7em 5em 0.65em; font-size: 1.7rem;">Zum Profil</VXButton>
					</div>
				</div>
			</div>
		</div>`,
	};

		return <BannerBuilder config={config} />;
	});

storiesOf('BannerSuite', module)
	.add('standard', () => {
		return <BannerSuite />;
	});

storiesOf('Button', module)
	.add('standard', () => {
		return <Button>Zum Profil</Button>;
	});


