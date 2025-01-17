import React     from 'react';
import {render}  from '@testing-library/react';
import PanelSkew from '../../../src/components/Content/PanelSkew';

describe('render panel skew', () => {
    const config = {
        fixedHeights: [
            {},
            {
                greaterThan: 1200,
                height:      260,
            },
        ],
    };

    test('fullhd', () => {
        const {container} = render(
                <PanelSkew link="http://www.example.com"
                           modifier="first"
                           src="http://www.example.com/img/default.jpg"
                           windowWidth={1920} config={config}
                >Content</PanelSkew>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    test('tablet', () => {
        const {container} = render(
                <PanelSkew link="http://www.example.com"
                           modifier="first"
                           src="http://www.example.com/img/default.jpg"
                           windowWidth={768} config={config}
                >Content</PanelSkew>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
