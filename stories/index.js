import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import BannerSuite from '../src/components/BannerSuite';
import {BannerBuilder} from "../src/utils/Builder";

function DesktopWrapper(children) {
	const style = {
		width:    '1300px',
		maxWidth: '100%',
	};

	return <div style={style}>{children}</div>;
}

storiesOf('BannerBuilder', module)
	.add('trial vip', () => {
		const config = {
			id:              '123456-123456',
			typeId:          'banner',
			template:        'fixedHeight',
			fixedHeights:    [
				{
					greaterThan:        0,
					height:             500,
					backgroundPosition: 'top right',
					backgroundSize:     'auto',
				},
				{
					greaterThan:        1200,
					height:             260,
					backgroundPosition: 'top right',
					backgroundSize:     'auto',
				},
			],
			color:           '#000000',
			backgroundColor: '#FFFFFF',
			backgroundUrl:   'http://www.visit-x.net/assets/img/teaser/teaser-trial-abo-bg.jpg',
			htmlText:        `
		<VXContent>
			<div style="margin-top: 2em;">
				<VXCaption style="font-size: 3rem; font-weight: normal;">
					Jetzt <span style="font-weight: bold; text-transform: uppercase;">VIP Gratismonat</span> starten <br>und zusätzlich 
					<span style="font-weight: bold; text-transform: uppercase;">20€ Startguthaben</span> erhalten!			
				</VXCaption>
			</div>
			<div>
				<div style="margin-top: 2em;">
					<VXButton style="padding: 0.7em 5em 0.65em; font-size: 1.7rem; background-color: #43B31C; border-color: #43B31C; text-transform: uppercase;">Jetzt einlösen</VXButton>
				</div>
			</div>
		</VXContent>`,
		};

		return DesktopWrapper(BannerBuilder(config, {
			onBannerClick: () => { alert('teaser clicked'); }
		}));
	});

storiesOf('BannerSuite', module)
	.add('standard', () => {
		return <BannerSuite onBannerClick={()=> alert('click')} />;
	});


