import React     from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import VXQL      from '../utils/Query';

export default class Provider extends React.Component {

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
				console.log('provider', data);
				console.log('provider config', JSON.parse(data.config.typeConfig));
				this.processData(data);
			});
		}
	}

	processData(data) {
		const {config} = data;

		if (config) {
			try {
				const origTypeConfig = JSON.parse(config.typeConfig);
				const typeConfig     = {};

				typeConfig.content      = origTypeConfig.content;
				typeConfig.fixedHeights = [
					{
						greaterThan:   0,
						height:        origTypeConfig.height2,
						backgroundUrl: origTypeConfig.backgroundUrl1,
					},
					{
						greaterThan:   origTypeConfig.breakpoint1,
						height:        origTypeConfig.height1,
						backgroundUrl: origTypeConfig.backgroundUrl2,
					},
				];
				console.log(typeConfig);
				this.setState({configs: [typeConfig]});


			} catch (e) { /* nothing */
			}
		}
	}

	render() {
		const childrenWithProps = React.Children.map(this.props.children,
			(child) => {
				return React.cloneElement(child, {
					configs: this.state.configs
				});
			}
		);

		return (
			<div>
				{childrenWithProps}
			</div>
		);
	}
}

Provider.propTypes = {
	config: PropTypes.object,
};
