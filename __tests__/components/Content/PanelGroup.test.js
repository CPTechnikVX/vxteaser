import React     from 'react';
import {shallow} from 'enzyme';
import PanelSkew from '../../../src/components/Content/PanelSkew';

describe('render panel skew', () => {
	const config = {
		fixedHeights: [
			{},
			{
				greaterThan: 1200,
				height:      260,
			},
		],
	};

	test('fullhd', () => {
		const wrapper = shallow(
			<PanelSkew link="http://www.example.com"
			           modifier="first"
			           src="http://www.example.com/img/default.jpg"
			           windowWidth={1920} config={config}
			>Content</PanelSkew>
		);
		expect(wrapper).toMatchSnapshot();
	});
	test('tablet', () => {
		const wrapper = shallow(
			<PanelSkew link="http://www.example.com"
			           modifier="first"
			           src="http://www.example.com/img/default.jpg"
			           windowWidth={768} config={config}
			>Content</PanelSkew>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
