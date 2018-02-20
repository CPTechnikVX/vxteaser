import React     from 'react';
import {shallow} from 'enzyme';
import Row       from '../../../src/components/Content/Row';
import Column    from '../../../src/components/Content/Column';

describe('render row', () => {
	test('with one col', () => {
		const wrapper = shallow(
			<Row><Column>Col1</Column></Row>
		);
		expect(wrapper).toMatchSnapshot();

		expect(wrapper.find('Column').prop('width')).toBe(100);
	});
	test('with two cols', () => {
		const wrapper = shallow(
			<Row><Column>Col1</Column><Column>Col2</Column></Row>
		);
		expect(wrapper).toMatchSnapshot();

		expect(wrapper.find('Column').first().prop('width')).toBe(50);
	});
});
