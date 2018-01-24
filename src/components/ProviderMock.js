import React     from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

export default class Provider extends React.Component {
	static propTypes = {
		children: PropTypes.object,
		config:   PropTypes.object,
	};

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
				.then((jsonRes) => {
					const configs = [];
					for (const configIndex in jsonRes) {
						const config = jsonRes[configIndex];

						const typeConfig = config.typeConfig;
						typeConfig.json  = config.json;

						typeConfig.fixedHeights = [
							{
								greaterThan:     0,
								height:          typeConfig.height2,
								backgroundUrl:   typeConfig.backgroundUrl2,
								backgroundColor: typeConfig.backgroundColor2,
								backgroundSize:  typeConfig.backgroundSize2,
								color:           typeConfig.color2,
							},
							{
								greaterThan:     typeConfig.breakpoint1,
								height:          typeConfig.height1,
								backgroundUrl:   typeConfig.backgroundUrl1,
								backgroundColor: typeConfig.backgroundColor1,
								backgroundSize:  typeConfig.backgroundSize1,
								color:           typeConfig.color1,
							},
						];

						configs.push(typeConfig);
					}

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
