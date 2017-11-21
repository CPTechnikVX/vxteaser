import React from 'react';
import renderer from 'react-test-renderer';
import Banner from '../src/components/Banner';
import Button from '../src/components/Button';

it('banner renders correctly', () => {
	const config = {
		title:         'SexyVany - Deutschlands jüngstes Camgirl',
		backgroundUrl: 'https://www.visit-x.net/assets/img/teaser/sexyvany/teaser-sexyvany.jpg',
	};

	const banner = renderer.create(
		<Banner config={config} />
	).toJSON();
	expect(banner).toMatchSnapshot();
});

it('button renders correctly', () => {
	const button = renderer.create(
		<Button>Text</Button>
	).toJSON();
	expect(button).toMatchSnapshot();
});
