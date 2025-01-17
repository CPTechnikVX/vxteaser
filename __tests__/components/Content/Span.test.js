import React    from 'react';
import {render} from '@testing-library/react';
import Span     from '../../../src/components/Content/Span';

describe('render common span', () => {
    test('with content', () => {
        const {container} = render(
                <Span top="10%" left="20%" modifier="testclass">This is the text!</Span>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
