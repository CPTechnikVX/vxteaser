import React        from 'react';
import ReactDOM     from 'react-dom';
import PropTypes    from 'prop-types';
import BannerSuite  from '../components/BannerSuite';
import ProviderMock from '../components/ProviderMock';
import Provider     from '../components/Provider';

class PreviewView extends React.PureComponent {
	static onClose() {
		alert('close button clicked!');
	}

	render() {
		const config  = this.props.config;
		let content;

		if (config.id) {
			content = <Provider config={config}>
				<BannerSuite className={config.bannerSuiteClassName ? config.bannerSuiteClassName : ''} onCloseFn={PreviewView.onClose} />
			</Provider>;
		} else {
			content = <ProviderMock config={config}>
				<BannerSuite className={config.bannerSuiteClassName ? config.bannerSuiteClassName : ''} onCloseFn={PreviewView.onClose} />
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
		ReactDOM.unmountComponentAtNode(container);
		ReactDOM.render(<PreviewView config={config} />, container);
	},
};
