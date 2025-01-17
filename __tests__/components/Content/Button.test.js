import React    from 'react';
import {render} from '@testing-library/react';
import Button   from '../../../src/components/Content/Button';

describe('render button', () => {
    test('empty', () => {
        const {container} = render(
                <Button />
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    test('with props', () => {
        const {container} = render(
                <Button color="primary" link="https://www.example.com">This is button</Button>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
