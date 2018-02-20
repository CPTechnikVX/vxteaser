import React          from 'react';
import {shallow}      from 'enzyme';
import SkewPanelGroup from '../../../src/components/Content/SkewPanelGroup';

describe('render skew panel group', () => {
	test('with content', () => {
		const wrapper = shallow(
			<SkewPanelGroup modifier="first" skewWidth="55%">Content</SkewPanelGroup>
		);
		expect(wrapper).toMatchSnapshot();

		expect(wrapper.find('.vxteaser-skew').prop('style').width).toBe('55%');
	});
});
