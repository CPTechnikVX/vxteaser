import React        from 'react';
import ReactDOM     from 'react-dom';
import PropTypes    from 'prop-types';
import BannerSuite  from '../components/BannerSuite';
import ProviderMock from '../components/ProviderMock';
import Provider     from '../components/Provider';
import LinkHandler  from '../components/LinkHandler';
import {createRoot} from 'react-dom/client';

class PreviewView extends React.PureComponent {
    static onClose() {
        alert('close button clicked!');
    }

    static onClickFn(clickEvent) {
        LinkHandler.handle(clickEvent);
    }

    render() {
        const config = this.props.config;
        let content;

        if (config.id) {
            content = <Provider config={config}>
                <BannerSuite className={config.bannerSuiteClassName ? config.bannerSuiteClassName : ''} onCloseFn={PreviewView.onClose} />
            </Provider>;
        } else {
            content = <ProviderMock config={config}>
                <BannerSuite className={config.bannerSuiteClassName ? config.bannerSuiteClassName : ''}
                             onCloseFn={PreviewView.onClose}
                             onClickFn={PreviewView.onClickFn}
                />
            </ProviderMock>;
        }

        return content;
    }
}

PreviewView.propTypes = {
    config: PropTypes.object,
};

export default {
    render(container, config) {
        const root = createRoot(container);
        root.render(<PreviewView config={config} />);
        ReactDOM.unmountComponentAtNode(container);
    },
};
