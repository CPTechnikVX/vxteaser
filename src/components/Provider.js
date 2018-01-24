import React       from 'react';
import PropTypes   from 'prop-types';
import BannerSuite from '../components/BannerSuite';
import 'whatwg-fetch';
import VXQL        from "../utils/Query";

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
				this.dummyHandler();
			});
		}
	}

	dummyHandler() {
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
					for (let configIndex in jsonRes) {
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
		}
	}

	originalHandler(data) {
		// begin of dummy data
		data              = {};
		const dummyConfig = {
			template:       'fixedHeight',
			breakpoint1:    1200,
			backgroundUrl1: 'https://ph.vxnextgen.x/assets/img/teaser/vx-magazin/vxteaser_092magazin_desktop.jpg',
			height1:        260,
			height2:        500,
			backgroundUrl2: 'https://ph.vxnextgen.x/assets/img/teaser/vx-magazin/vxteaser_092magazin_desktop.jpg',
		};
		data.config       = {
			typeConfig: JSON.stringify(dummyConfig)
		};
		// end of dummy data
		const {config}    = data;

		if (config) {
			try {
				const typeConfig = JSON.parse(config.typeConfig);

				/* dummy request */
				fetch(
					'/create.php',
					{
						method: 'get',
					}
				).then((res) => res.json()
				).then((jsonRes) => {
					typeConfig.fixedHeights = [
						{
							greaterThan:   0,
							height:        typeConfig.height2,
							backgroundUrl: typeConfig.backgroundUrl1,
						},
						{
							greaterThan:   typeConfig.breakpoint1,
							height:        typeConfig.height1,
							backgroundUrl: typeConfig.backgroundUrl2,
						},
					];

					typeConfig.json = jsonRes;

					this.setState({configs: [typeConfig]});

				});
				/* end of dummy request */

				/*
										typeConfig.fixedHeights = [
											{
												greaterThan:   0,
												height:        typeConfig.height2,
												backgroundUrl: typeConfig.backgroundUrl1,
											},
											{
												greaterThan:   typeConfig.breakpoint1,
												height:        typeConfig.height1,
												backgroundUrl: typeConfig.backgroundUrl2,
											},
										];

										this.setState({configs: [typeConfig]});

				*/

			} catch (e) { /* nothing */
			}
		}
	}

	render() {
		return (
			<div>
				<BannerSuite configs={this.state.configs} />
			</div>
		);
	}
}

Provider.propTypes = {
	config: PropTypes.object,
};
