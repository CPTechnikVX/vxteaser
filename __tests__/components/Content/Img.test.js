import React     from 'react';
import {shallow} from 'enzyme';
import Img       from '../../../src/components/Content/Img';

describe('render picture', () => {
	test('default', () => {
		const wrapper = shallow(
			<Img modifier="-big-pic" />
		);
		expect(wrapper).toMatchSnapshot();
	});
});
