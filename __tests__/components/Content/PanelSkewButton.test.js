import React           from 'react';
import {render}        from '@testing-library/react';
import PanelSkewButton from '../../../src/components/Content/PanelSkewButton';

describe('render panel skew button', () => {
    const config = {
        fixedHeights: [
            {},
            {
                greaterThan: 1200,
                height:      260,
            },
        ],
    };

    test('desktop', () => {
        const {container} = render(
                <PanelSkewButton link="http://www.example.com" modifier="first" config={config} windowWidth={1920}>Content</PanelSkewButton>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    test('tablet', () => {
        const {container} = render(
                <PanelSkewButton link="http://www.example.com" modifier="first" config={config} windowWidth={768}>Content</PanelSkewButton>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
