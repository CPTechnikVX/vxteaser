import React    from 'react';
import {render} from '@testing-library/react';
import Text     from '../../../src/components/Content/Text';

describe('render text', () => {
    test('with content', () => {
        const {container} = render(
                <Text>This is the text!</Text>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    test('with color', () => {
        const {container} = render(
                <Text color="highlight">This is the text with highlight color!</Text>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
