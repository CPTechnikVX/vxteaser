import React            from 'react';
import {render, screen} from '@testing-library/react';
import Panel            from '../../../src/components/Content/Panel';

describe('render panel', () => {
	test('with content', () => {
		const {container} = render(
			<Panel width="55%" config={{width: '50%'}}>Panel content</Panel>
		);
		expect(container.firstChild).toMatchSnapshot();

		const panel = screen.getByTestId('panel');
        expect(panel).toHaveStyle({width: '50%'});
	});
	test('with content and modifier', () => {
		const {container} = render(
			<Panel width="55%" config={{width: '50%'}} modifier="-mb-5">Panel content</Panel>
		);
		expect(container.firstChild).toMatchSnapshot();

        const panel = screen.getByTestId('panel');
        expect(panel).toHaveStyle({width: '50%'});
	});
});
