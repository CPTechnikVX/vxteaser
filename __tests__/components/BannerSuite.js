import React       from 'react';
import {shallow}   from 'enzyme';
import Constants   from '../../src/utils/Constants';
import classnames  from 'classnames';
import BannerSuite from '../../src/components/BannerSuite';

describe('render banner suite', () => {
	const config = {
		fixedHeights: [
			{
				backgroundUrl: 'url0',
				height:        500,
			},
			{
				backgroundUrl: 'url1',
				height:        260,
				greaterThan:   1200,
			},
		],
	};

	test('empty banner suite', () => {
		const wrapper = shallow(
			<BannerSuite />
		);
		expect(wrapper).toMatchSnapshot();
	});
});
