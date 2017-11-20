import React from 'react';
import ReactDOM from 'react-dom';
import Banner from '../components/Banner';

class IndexView extends React.Component {
	render() {
		return (
			<div>
				<Banner />
			</div>
		);
	}
}

export default {
	render(container) {
		ReactDOM.render(<IndexView />, container);
	}
}
