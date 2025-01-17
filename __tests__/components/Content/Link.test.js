import React    from 'react';
import {render} from '@testing-library/react';
import Link     from '../../../src/components/Content/Link';

describe('render link', () => {
    test('with content', () => {
        const {container} = render(
                <Link color="highlight" link="http://www.example.com" modifier="js-link">Link content</Link>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
