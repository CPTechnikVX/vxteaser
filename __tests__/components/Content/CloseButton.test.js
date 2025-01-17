import React       from 'react';
import {render}    from '@testing-library/react';
import CloseButton from '../../../src/components/Content/CloseButton';

describe('render button', () => {
    test('empty', () => {
        const {container} = render(
                <CloseButton />
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
