import React     from 'react';
import {shallow} from 'enzyme';
import Headline  from '../../../src/components/Content/Headline';

describe('render headline', () => {
	test('empty headline', () => {
		const wrapper = shallow(
			<Headline>This is headline</Headline>
		);
		expect(wrapper).toMatchSnapshot();
	});
	test('main headline', () => {
		const wrapper = shallow(
			<Headline type="main">This is a main headline</Headline>
		);
		expect(wrapper).toMatchSnapshot();
	});
	test('sub headline', () => {
		const wrapper = shallow(
			<Headline type="sub">This is a sub</Headline>
		);
		expect(wrapper).toMatchSnapshot();
	});
	test('default text headline', () => {
		const wrapper = shallow(
			<Headline type="text">This is text</Headline>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
