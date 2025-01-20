import React      from 'react';
import {shallow}  from 'enzyme';
import Tile       from '../../../src/components/Content/Tile';
import Constants  from '../../../src/utils/Constants';
import classnames from 'classnames';

describe('render tile', () => {
    const windowWidth = 1300;
    const config      = {
        aspectRatio: [
            {
                backgroundUrl: 'url0',
            },
        ],
    };

    test('empty tile', () => {
        const wrapper = shallow(
                <Tile />
        );
        expect(wrapper).toMatchSnapshot();
    });
    test('tile content', () => {
        const wrapper = shallow(
                <Tile config={config}></Tile>
        );

        expect(wrapper.find('img').prop('src')).toBe(config.aspectRatio[0]['backgroundUrl']);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('TileContent')).toHaveLength(1);
        expect(wrapper.find('.' + classnames(Constants.ClassName.Tile).split(' ').join('.'))).toHaveLength(1);
    });
    test('tile theme', () => {
        const wrapper = shallow(
                <Tile config={config} theme={'white'}></Tile>
        );
        expect(wrapper).toMatchSnapshot();
    });
    test('tile pass props to children', () => {
        const wrapper = shallow(
                <Tile config={config} theme={'white'} windowWidth={windowWidth}></Tile>
        );
        expect(wrapper.find('TileContent').prop('windowWidth')).toBe(windowWidth);
    });
});
