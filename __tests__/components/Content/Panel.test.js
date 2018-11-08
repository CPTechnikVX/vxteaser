import React     from 'react';
import {shallow} from 'enzyme';
import Panel     from '../../../src/components/Content/Panel';

describe('render panel', () => {
	test('with content', () => {
		const wrapper = shallow(
			<Panel width="55%" config={{width: '50%'}}>Panel content</Panel>
		);
		expect(wrapper).toMatchSnapshot();

		const style = wrapper.prop('style');
		expect(style.width).toBe('50%');
	});
	test('with content and modifier', () => {
		const wrapper = shallow(
			<Panel width="55%" config={{width: '50%'}} modifier="-mb-5">Panel content</Panel>
		);
		expect(wrapper).toMatchSnapshot();

		const style = wrapper.prop('style');
		expect(style.width).toBe('50%');
	});
});
