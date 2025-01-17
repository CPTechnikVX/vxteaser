import React            from 'react';
import {render, screen} from '@testing-library/react';
import Banner           from '../../../src/components/Content/Banner';
import Constants        from '../../../src/utils/Constants';

describe('render banner', () => {
    const config = {
        fixedHeights: [
            {
                backgroundUrl: 'url0',
                height:        500,
            },
            {
                backgroundUrl: 'url1',
                height:        260,
                greaterThan:   1200,
            },
        ],
    };

    test('empty banner', () => {
        const {container} = render(
                <Banner />
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    test('Banner renders correctly', () => {
        const config = {
            fixedHeights: [
                {backgroundUrl: 'test-url.jpg', height: 100},
                {height: 200}
            ]
        };

        render(<Banner config={config} />);

        // Check if the image is rendered with correct src and style
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', config.fixedHeights[0].backgroundUrl);
        expect(image).toHaveStyle({height: '100%'});

        // Check if the banner has the correct height
        const banner = screen.getByTestId('banner');
        expect(banner).toHaveStyle({height: '200px'});

        // Check if BannerContent is rendered
        expect(screen.getByTestId('banner-content')).toBeInTheDocument();

        // Check if the banner has the correct class
        expect(banner).toHaveClass(Constants.ClassName.Banner[0]);

        // Snapshot testing
        expect(banner).toMatchSnapshot();
    });

    test('banner content tablet', () => {
        render(<Banner config={config} windowWidth={768} />);

        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', config.fixedHeights[1].backgroundUrl);

        const banner = screen.getByTestId('banner');
        expect(banner).toHaveClass(Constants.ClassName.BannerNoSkew);

        expect(screen.getByTestId('banner-content')).toBeInTheDocument();

        expect(banner).toMatchSnapshot();
    });

    test('banner theme', () => {
        const {container} = render(
                <Banner config={config} theme={'white'} modifier="-view2--bg-auto" />
        );

        expect(container.firstChild).toMatchSnapshot();
    });

});
