import React     from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

/**
 * Mock Provider connection with dummy configs
 */
export default class ProviderMock extends React.PureComponent {
	constructor(props) {
		super(props);

		// state
		this.state = {};
	}

	componentDidMount() {
		this.loadConfig();
	}

	loadConfig() {
		this.processData();
	}

	processData() {
		try {
			/* dummy request */
			fetch(
				'/createAll.php',
				{
					method: 'get',
				}
			).then((res) => res.json())
				.then((configs) => {
					this.setState({configs: configs});
				});
			/* end of dummy request */
		} catch (e) { /* nothing */
			//			console.error(e.message);
		}
	}

	render() {
		const childrenWithProps = React.Children.map(this.props.children,
			(child) => React.cloneElement(child, {
				configs: this.state.configs,
			})
		);

		return (
			<div>
				{childrenWithProps}
			</div>
		);
	}
}

ProviderMock.propTypes = {
	children: PropTypes.object,
	config:   PropTypes.object,
};
