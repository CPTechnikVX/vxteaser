import React            from 'react';
import {render, screen} from '@testing-library/react';
import Row              from '../../../src/components/Content/Row';
import Column           from '../../../src/components/Content/Column';

describe('render row', () => {
    test('with one col', () => {
        const {container} = render(
                <Row><Column>Col1</Column></Row>
        );
        expect(container.firstChild).toMatchSnapshot();

        const column = screen.getByTestId('column');
        expect(column).toHaveStyle({width: '100%'});
    });

    test('with two cols', () => {
        const {container} = render(
                <Row><Column>Col1</Column><Column>Col2</Column></Row>
        );
        expect(container.firstChild).toMatchSnapshot();

        const columns = screen.getAllByTestId('column');
        expect(columns[0]).toHaveStyle({width: '50%'});
    });
});
