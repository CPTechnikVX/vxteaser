import React    from 'react';
import {render} from '@testing-library/react';
import Img      from '../../../src/components/Content/Img';

describe('render picture', () => {
    test('default', () => {
        const {container} = render(
                <Img modifier="-big-pic" />
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
