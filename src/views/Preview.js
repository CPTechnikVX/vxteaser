import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import BannerSuite from '../components/BannerSuite';

class PreviewView extends React.Component {
	render() {
		const config = this.props.config;

		return (
			<div>
				<BannerSuite providerConfig={config} />
			</div>
		);
	}
}

PreviewView.propTypes = {
	config: PropTypes.object,
};

export default {
	render(container, config) {
		ReactDOM.unmountComponentAtNode(container);
		ReactDOM.render(<PreviewView config={config} />, container);
	}
}
