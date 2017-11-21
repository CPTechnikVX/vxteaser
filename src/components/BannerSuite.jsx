import React from 'react';
import Banner from './Banner';

class BannerSuite extends React.PureComponent {

	render() {
		const config = [
			{
				title:           'SexyVany - Deutschlands jüngstes Camgirl',
				headline:        'Exklusiv für VISIT-X',
				backgroundUrl:   'https://www.visit-x.net/assets/img/teaser/sexyvany/teaser-sexyvany.jpg',
				color:           'white',
				backgroundColor: '#262728',
			},
			{
				title:           'MiraGrey - Deutschlands versautestes Camgirl',
				headline:        'Exklusiv für VISIT-X',
				backgroundUrl:   'https://www.visit-x.net/assets/img/teaser/teaser-all-welcome-bg.jpg',
				color:           'white',
				backgroundColor: '#262728',
			},
			{
				title:           'MimiSweet - Deutschlands süßestes Camgirl',
				headline:        'Exklusiv für VISIT-X',
				backgroundUrl:   'https://www.visit-x.net/assets/img/teaser/teaser_nologin_02_02.jpg?v=2017-04-27',
				color:           'white',
				backgroundColor: '#262728',
			}
		];

		const bannerDom = config.map((config) => <Banner config={config} />);

		return (
			<div>
				{bannerDom}
			</div>
		);
	}
}

export default BannerSuite;