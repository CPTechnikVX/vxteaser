import React     from 'react';
import {shallow} from 'enzyme';
import Link      from '../../../src/components/Content/Link';

describe('render link', () => {
	test('with content', () => {
		const wrapper = shallow(
			<Link color="highlight" link="http://www.example.com">Link content</Link>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
