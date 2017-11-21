import React from 'react';
import ReactDOM from 'react-dom';
import BannerSuite from '../components/BannerSuite';

class IndexView extends React.Component {
	render() {
		return (
			<div>
				<BannerSuite />
			</div>
		);
	}
}

export default {
	render(container) {
		ReactDOM.render(<IndexView />, container);
	}
}
