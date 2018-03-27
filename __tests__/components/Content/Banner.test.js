import React         from 'react';
import {shallow}     from 'enzyme';
import Banner        from '../../../src/components/Content/Banner';
import BannerContent from '../../../src/components/Content/BannerContent';
import Constants     from '../../../src/utils/Constants';
import classnames    from 'classnames';

describe('render banner', () => {
	const windowWidth = 1300;
	const config      = {
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

	test('empty banner', () => {
		const wrapper = shallow(
			<Banner />
		);
		expect(wrapper).toMatchSnapshot();
	});
	test('banner content', () => {
		const wrapper = shallow(
			<Banner config={config}></Banner>
		);
		const style   = wrapper.prop('style');

		expect(style.height).toBe(config.fixedHeights[1]['height'] + 'px');
		expect(style.backgroundImage).toContain(config.fixedHeights[0]['backgroundUrl']);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('BannerContent')).toHaveLength(1);
		expect(wrapper.find('.' + classnames(Constants.ClassName.Banner).split(' ').join('.'))).toHaveLength(1);
	});
	test('banner content tablet', () => {
		const wrapper = shallow(
			<Banner config={config} windowWidth={768}></Banner>
		);
		const style   = wrapper.prop('style');

		expect(style.height).toBe(config.fixedHeights[0]['height'] + 'px');
		expect(style.backgroundImage).toContain(config.fixedHeights[1]['backgroundUrl']);
		expect(wrapper.find('.' + classnames(Constants.ClassName.BannerNoSkew).split(' ').join('.'))).toHaveLength(1);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('BannerContent')).toHaveLength(1);
	});
	test('banner theme', () => {
		const wrapper = shallow(
			<Banner config={config} theme={'white'} modifier="-view2--bg-auto"></Banner>
		);
		expect(wrapper).toMatchSnapshot();
	});
	test('banner pass props to children', () => {
		const wrapper = shallow(
			<Banner config={config} theme={'white'} windowWidth={windowWidth}></Banner>
		);
		expect(wrapper.find('BannerContent').prop('windowWidth')).toBe(windowWidth);
	});
});
