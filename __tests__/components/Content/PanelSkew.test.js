import React      from 'react';
import {render}   from '@testing-library/react';
import PanelGroup from '../../../src/components/Content/PanelGroup';

describe('render panel group', () => {
    test('with content', () => {
        const {container} = render(
                <PanelGroup>Content</PanelGroup>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
