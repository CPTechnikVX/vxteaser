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
					<VXButton style="padding: 0.7em 5em 0.65em; font-size: 1.7rem; background-color: #43B31C; border-color: #43B31C; text-transform: uppercase;" data-type="action">Jetzt einlösen</VXButton>
				</div>
			</div>
		</VXContent>`,
		};

		return DesktopWrapper(BannerBuilder(config, {
			onBannerClick: () => { alert('teaser clicked'); },
			onButtonClick: (event) => { console.log(event.target.dataset); event.preventDefault(); event.stopPropagation(); alert('button clicked'); }
		}));
	})
	.add('calendar', () => {
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
			backgroundUrl:   'http://www.visit-x.net/assets/img/teaser/teaser-vx-calendar-2018-1300x260-bg.jpg',
			htmlText:        `
		<VXContent>
			<div style="margin-top: 2em;">
				<VXCaption>12 heiße</VXCaption>
				<VXHeadline style="text-transform: uppercase;">Hol dir die camgirls</VXHeadline>
			</div>
			<div>
				<div style="margin-top: 1em;">
					<VXButton style="text-transform: uppercase;" data-type="action">Kalender bestellen!</VXButton>
				</div>
			</div>
		</VXContent>`,
		};

		return DesktopWrapper(BannerBuilder(config, {
			onBannerClick: () => { alert('teaser clicked'); },
			onButtonClick: (event) => { console.log(event.target.dataset); event.preventDefault(); event.stopPropagation(); alert('button clicked'); }
		}));
	});

storiesOf('BannerSuite', module)
	.add('standard', () => {
		const config = {
			vxqlEndpoint: 'https://pu.vxnextgen.x/vxql',
			vxqlWebToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXJ0bmVySWQiOjgyNzgsInByb2R1Y3RJZCI6MTAwMDN9.8B65L1KiQ4xhJlSNJGvcBInBx4CtlUV_KrLMz3AnLyk',
			id:   'e683a10b-c159-4533-b04f-140a5bab61ec'
		};

		return <BannerSuite providerConfig={config} onBannerClick={()=> alert('click')} onButtonClick={(event)=> {event.stopPropagation(); event.preventDefault(); alert('button click')}} />;
	});


