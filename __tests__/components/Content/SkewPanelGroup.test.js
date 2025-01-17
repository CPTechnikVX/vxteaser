import React          from 'react';
import {render}       from '@testing-library/react';
import SkewPanelGroup from '../../../src/components/Content/SkewPanelGroup';

describe('render skew panel group', () => {
    test('with content', () => {
        const {container} = render(
                <SkewPanelGroup modifier="first" skewWidth="55%">Content</SkewPanelGroup>
        );
        expect(container).toMatchSnapshot();

        const skew = container.querySelector('.vxteaser-skew');
        expect(skew).toHaveStyle({width: '55%'});
    });
});
