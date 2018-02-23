import React     from 'react';
import {shallow} from 'enzyme';
import Column    from '../../../src/components/Content/Column';

describe('render column', () => {
	test('empty', () => {
		const wrapper = shallow(
			<Column width="33%" />
		);
		expect(wrapper).toMatchSnapshot();
	});
	test('with content', () => {
		const wrapper = shallow(
			<Column width="33%">Column content</Column>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
