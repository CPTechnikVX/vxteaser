import React            from 'react';
import {render, screen} from '@testing-library/react';
import Tile             from '../../../src/components/Content/Tile';
import Constants        from '../../../src/utils/Constants';
import classnames       from 'classnames';

describe('render tile', () => {
    const config = {
        aspectRatio: [
            {
                backgroundUrl: 'url0',
            },
        ],
    };

    test('empty tile', () => {
        const {container} = render(
                <Tile />
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    test('tile content', () => {
        const {container} = render(
                <Tile config={config}></Tile>
        );

        expect(container.querySelector('img').getAttribute('src')).toBe(config.aspectRatio[0]['backgroundUrl']);
        expect(container.firstChild).toMatchSnapshot();
        expect(screen.getAllByTestId('tile-content')).toHaveLength(1);
        expect(container.querySelectorAll('.' + classnames(Constants.ClassName.Tile).split(' ').join('.'))).toHaveLength(1);
    });

    test('tile theme', () => {
        const {container} = render(
                <Tile config={config} theme={'white'}></Tile>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

});
