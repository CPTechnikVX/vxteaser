import React    from 'react';
import {render} from '@testing-library/react';
import Headline from '../../../src/components/Content/Headline';

describe('render headline', () => {
    test('empty headline', () => {
        const {container} = render(
                <Headline>This is headline</Headline>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    test('main headline', () => {
        const {container} = render(
                <Headline type="main">This is a main headline</Headline>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    test('sub headline', () => {
        const {container} = render(
                <Headline type="sub">This is a sub</Headline>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
    
    test('default text headline', () => {
        const {container} = render(
                <Headline type="text">This is text</Headline>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
