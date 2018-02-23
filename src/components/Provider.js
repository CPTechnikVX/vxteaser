import React     from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import VXQL      from '../utils/Query';

/**
 * Load configs via VXQL and pass it to the child element
 */
export default class Provider extends React.PureComponent {
	constructor(props) {
		super(props);

		// state
		this.state = {};
	}

	componentDidMount() {
		this.loadConfig();
	}

	loadConfig() {
		const config = this.props.config;

		if (config && config.vxqlEndpoint) {
			const vxql = VXQL(config.vxqlEndpoint, config.vxqlWebToken);
			vxql.query(
				`query ($id: ID!) {
                    config(id: $id) {
                        typeConfig
                    }
                }`,
				{
					id: config.id,
				}
			).then((data) => {
				if (data) {
					this.processData(data);
				}
			});
		}
	}

	processData(data) {
		const {config} = data;

		if (config) {
			try {
				const origTypeConfig = JSON.parse(config.typeConfig);
				this.setState({configs: [origTypeConfig]});
			} catch (e) { /* nothing */
			}
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

Provider.propTypes = {
	/** @ignore */
	children: PropTypes.node,
	config:   PropTypes.object,
};
