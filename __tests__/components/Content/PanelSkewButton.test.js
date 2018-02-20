import React           from 'react';
import {shallow}       from 'enzyme';
import PanelSkewButton from '../../../src/components/Content/PanelSkewButton';

describe('render panel skew button', () => {
	const config = {
		fixedHeights: [
			{},
			{
				greaterThan: 1200,
				height:      260,
			},
		],
	};

	test('desktop', () => {
		const wrapper = shallow(
			<PanelSkewButton link="http://www.example.com" modifier="first" config={config} windowWidth={1920}>Content</PanelSkewButton>
		);
		expect(wrapper).toMatchSnapshot();
	});
	test('tablet', () => {
		const wrapper = shallow(
			<PanelSkewButton link="http://www.example.com" modifier="first" config={config} windowWidth={768}>Content</PanelSkewButton>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
