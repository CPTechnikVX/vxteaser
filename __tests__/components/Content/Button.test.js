import React     from 'react';
import {shallow} from 'enzyme';
import Button    from '../../../src/components/Content/Button';

describe('render button', () => {
	test('empty', () => {
		const wrapper = shallow(
			<Button />
		);
		expect(wrapper).toMatchSnapshot();
	});
	test('with props', () => {
		const wrapper = shallow(
			<Button color="primary" link="https://www.example.com">This is button</Button>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
