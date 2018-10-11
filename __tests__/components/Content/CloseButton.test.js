import React       from 'react';
import {shallow}   from 'enzyme';
import CloseButton from '../../../src/components/Content/CloseButton';

describe('render button', () => {
	test('empty', () => {
		const wrapper = shallow(
			<CloseButton />
		);
		expect(wrapper).toMatchSnapshot();
	});
});
