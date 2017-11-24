import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import {BannerBuilder} from '../utils/Builder';
import {classNames} from './../utils/Constants';
import ElementFactory from '../utils/ElementFactory';
import VXQL from '../utils/Query';

export default class BannerSuite extends React.PureComponent {

	constructor(props) {
		super(props);

		this.banners       = {};
		this.itemRefs      = [];
		this.pointRefs     = [];
		this.timerInterval = null;
		this.resizeTimeout = null;

		// bind
		this.onBannerClick = this.onBannerClick.bind(this);
		this.onBannerOver  = this.onBannerOver.bind(this);
		this.onBannerOut   = this.onBannerOut.bind(this);
		this.onButtonClick = this.onButtonClick.bind(this);
		this.onResize      = this.onResize.bind(this);

		// state
		this.state = this.getInitialState();
	}

	/**
	 * initial state
	 * @returns {Object}
	 */
	getInitialState() {
		this.loadConfig();

		return {
			visibleIndex: 0,
			mouseOver:    false,
			configs:      [],
			windowWidth:  window.innerWidth,
		};
	}

	componentDidMount() {
		window.addEventListener('resize', this.onResize);

		if (this.needTimerInterval()) {
			this.startInterval();
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		const breakpoint = this.state.configs && this.state.configs.length > 0 ? this.state.configs[0].fixedHeights[1]['greaterThan'] : null;

		if (nextState.visibleIndex !== this.state.visibleIndex) {
			return false;
		} else if (breakpoint && nextState.windowWidth !== this.state.windowWidth
			&& !(this.state.windowWidth < breakpoint && nextState.windowWidth >= breakpoint
				|| this.state.windowWidth >= breakpoint && nextState.windowWidth < breakpoint)
		) {
			return false;
		} else {
			return true;
		}
	}

	componentDidUpdate() {
		if (this.needTimerInterval()) {
			this.startInterval();
		}
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.onResize);
		this.clearInterval();
	}

	needTimerInterval() {
		return this.state.configs && this.state.configs.length > 1 && this.props.delay > 0;
	}

	loadConfig() {
		if (this.props.providerConfig && this.props.providerConfig.vxqlEndpoint) {
			const vxql = VXQL(this.props.providerConfig.vxqlEndpoint, this.props.providerConfig.vxqlWebToken);
			vxql.query(
				`query ($id: ID!) {
                    config(id: $id) {
                        typeConfig
                    }
                }`,
				{
					id: this.props.providerConfig.id,
				}
			).then((data) => {
				const {config} = data;
				if (config) {
					try {
						const typeConfig        = JSON.parse(config.typeConfig);
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
					} catch (e) { /* nothing */
					}
				}
			});
		}
	}

	/**
	 * Create or load banner via config
	 * @param config
	 * @returns {*}
	 */
	getBannerByConfig(config) {
		let bannerDOM;
		// get banner from cache
		//		if (typeof this.banners[config.id] !== 'undefined') {
		//			bannerDOM = this.banners[config.id];
		//		}
		//		 render banner
		//		else {
		this.banners[config.id] = bannerDOM = BannerBuilder(config, {
			onBannerClick: this.onBannerClick,
			onButtonClick: this.onButtonClick,
			windowWidth:   window.innerWidth,
		});
		//		}

		return bannerDOM;
	}

	onBannerClick(event) {
		if (typeof this.props.onBannerClick === 'function') {
			this.props.onBannerClick(event);
		}
	}

	onResize() {
		if (this.resizeTimeout) {
			window.clearTimeout(this.resizeTimeout);
			this.resizeTimeout = null;
		}

		if (!this.resizeTimeout) {
			this.resizeTimeout = window.setTimeout(() => {
				this.setState({windowWidth: window.innerWidth}, () => {
					this.resizeTimeout = null;
				});
			}, 100);
		}
	}

	/**
	 * mouse over banner
	 */
	onBannerOver() {
		this.clearInterval();
	}

	/**
	 * mouse out banner
	 */
	onBannerOut() {
		this.startInterval();
	}

	onButtonClick(event) {
		if (typeof this.props.onButtonClick === 'function') {
			this.props.onButtonClick(event);
		}
	}

	/**
	 * set visible item via index
	 * @param i
	 */
	setVisible(i) {
		if (this.itemRefs && typeof this.itemRefs[i] !== 'undefined') {
			const oldIndex = this.state.visibleIndex;

			this.setState({visibleIndex: i}, () => {
				if (oldIndex !== i) {
					if (typeof this.itemRefs[oldIndex] !== 'undefined') {
						const el = ReactDOM.findDOMNode(this.itemRefs[oldIndex]);
						el.classList.remove('is-active');
					}

					if (typeof this.pointRefs[oldIndex] !== 'undefined') {
						const point = ReactDOM.findDOMNode(this.pointRefs[oldIndex]);
						point.classList.remove('is-active');
					}
				}

				if (typeof this.itemRefs[i] !== 'undefined') {
					const el = ReactDOM.findDOMNode(this.itemRefs[i]);
					el.classList.add('is-active');
				}

				if (typeof this.pointRefs[i] !== 'undefined') {
					const point = ReactDOM.findDOMNode(this.pointRefs[i]);
					point.classList.add('is-active');
				}
			});
		}
	}

	/**
	 * activate timer interval for switching items
	 */
	startInterval() {
		this.clearInterval();

		this.timerInterval = window.setInterval(() => {
			const cnt = this.state.configs.length;

			if (cnt > 0 && !this.state.mouseOver) {
				this.setVisible((this.state.visibleIndex + 1) % cnt);
			}
		}, this.props.delay);
	}

	/**
	 * deactivate timer interval for switching items
	 */
	clearInterval() {
		if (this.timerInterval) {
			window.clearInterval(this.timerInterval);
			this.timerInterval = null;
		}
	}

	render() {
		const configs = this.state.configs;
		let content   = null;

		// is configuration provided?
		if (configs && configs.length > 0) {
			const pointsDOM          = [];
			const fixedHeights       = configs[0].fixedHeights;

			// generate banners from config array
			const bannerDOM = configs.map((config, i) => {
				if (configs.length > 1) {
					const setVisible = () => {
						this.clearInterval();
						this.setVisible(i);
					};
					const getRef     = (ref) => {
						if (ref) {
							this.pointRefs[i] = ref;
						}
					};

					// banner switch control
					/*eslint-disable*/
					pointsDOM.push(<div className={classNames.TeaserPoint + (i === 0 ? ' is-active' : '')}
					                                   onClick={setVisible}
					                                   key={i}
					                                   ref={getRef}
					/>);
					/*eslint-enable*/
				}

				// define suite item
				const ListItemElement = ElementFactory.getSuiteItem();

				return <ListItemElement key={i} className={classNames.TeaserSuiteItem + (i === 0 ? ' is-active' : '')} ref={(ref) => {
					if (ref) {
						this.itemRefs[i] = ref;
					}
				}}
				       >{this.getBannerByConfig(config)}</ListItemElement>;
			});

			// define suite
			const windowWidth = this.state.windowWidth;
			const ListElement = ElementFactory.getSuite({fixedHeights, windowWidth});

			if (bannerDOM.length > 0) {
				content = (
					<ListElement onMouseEnter={this.onBannerOver} onMouseLeave={this.onBannerOut} className={classNames.TeaserSuite}>
						{bannerDOM}
						{pointsDOM.length > 1 && <div className={classNames.TeaserPointContainer}>{pointsDOM}</div>}
					</ListElement>
				);
			}
		}

		return content;
	}
}

BannerSuite.propTypes = {
	delay:          PropTypes.number,
	onBannerClick:  PropTypes.func,
	onButtonClick:  PropTypes.func,
	providerConfig: PropTypes.object,
};

BannerSuite.defaultProps = {
	providerConfig: {},
	delay:          10000,
};
