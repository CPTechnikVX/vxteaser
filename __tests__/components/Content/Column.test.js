import React    from 'react';
import Column   from '../../../src/components/Content/Column';
import {render} from '@testing-library/react';

describe('render column', () => {
    test('empty', () => {
        const {container} = render(
                <Column width="33%" />
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    test('with content', () => {
        const {container} = render(
                <Column width="33%">Column content</Column>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
