import React       from 'react';
import ReactDOM    from 'react-dom';
import PropTypes   from 'prop-types';
import BannerSuite from '../components/BannerSuite';
import Provider    from "../components/Provider";

class PreviewView extends React.Component {
	render() {
		const config = this.props.config;

		return (
			<Provider config={config}>
				<BannerSuite />
			</Provider>
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
	},
};
