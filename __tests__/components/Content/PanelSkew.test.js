import React      from 'react';
import {shallow}  from 'enzyme';
import PanelGroup from '../../../src/components/Content/PanelGroup';

describe('render panel group', () => {
	test('with content', () => {
		const wrapper = shallow(
			<PanelGroup>Content</PanelGroup>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
