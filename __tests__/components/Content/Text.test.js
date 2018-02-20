import React     from 'react';
import {shallow} from 'enzyme';
import Column    from '../../../src/components/Content/Column';
import Text      from '../../../src/components/Content/Text';

describe('render text', () => {
	test('with content', () => {
		const wrapper = shallow(
			<Text>This is the text!</Text>
		);
		expect(wrapper).toMatchSnapshot();
	});
	test('with color', () => {
		const wrapper = shallow(
			<Text color="highlight">This is the text with highlight color!</Text>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
