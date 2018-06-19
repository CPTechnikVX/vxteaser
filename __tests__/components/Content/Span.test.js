import React     from 'react';
import {shallow} from 'enzyme';
import Span      from '../../../src/components/Content/Span';

describe('render common span', () => {
	test('with content', () => {
		const wrapper = shallow(
			<Span top="10%" left="20%" modifier="testclass">This is the text!</Span>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
