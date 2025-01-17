import React       from 'react';
import {render}    from '@testing-library/react';
import BannerSuite from '../../src/components/BannerSuite';

describe('render banner suite', () => {
    test('empty banner suite', () => {
        const {container} = render(
                <BannerSuite />
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
