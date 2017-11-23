import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import {BannerBuilder} from '../utils/Builder';
import {classNames, StyledElementFactory} from '../utils/StyledElementFactory';
import VXQL from '../utils/Query';

export default class BannerSuite extends React.PureComponent {

	constructor(props) {
		super(props);

		this.banners       = {};
		this.itemRefs      = [];
		this.pointRefs     = [];
		this.timerInterval = null;

		// state
		this.state = this.getInitialState();

		// bind
		this.onBannerClick = this.onBannerClick.bind(this);
		this.onButtonClick = this.onButtonClick.bind(this);
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
			configs:      [
//				{
//					id:            '123456-1111',
//					typeId:        'banner',
//					template:      'fixedHeight',
//					fixedHeights:  [
//						{
//							greaterThan:        0,
//							height:             500,
//							backgroundPosition: 'initial',
//							backgroundSize:     'auto',
//						},
//						{
//							greaterThan:        1200,
//							height:             260,
//							backgroundPosition: 'right 90%',
//							backgroundSize:     'contain',
//						},
//					],
//					backgroundUrl: 'https://www.visit-x.net/assets/img/teaser/teaser-all-welcome-bg.jpg',
//					htmlText:      `
//		<VXContent>
//			<div class="row">
//				<div class="col-xs-12">
//					<VXHeadline>
//						EXKLUSIV AUF VISIT-X!
//					</VXHeadline>
//					<VXText>
//						Schau Dir hier unzensierte Bilder und Videos von der süßen 18 jährigen<br>
//						an oder besuche sie bis zu 17 Stunden am Tag im Livechat.
//					</VXText>
//				</div>
//			</div>
//			<div class="row">
//				<div class="col-xs-12">
//					<div class="teaser__sexyvany-buttoncontainer" style="margin-top: 2em;">
//						<VXButton style="padding: 0.7em 5em 0.65em; font-size: 1.7rem; background-color: #43B31C; border-color: #43B31C;">Zum Profil</VXButton>
//					</div>
//				</div>
//			</div>
//		</VXContent>`,
//				},
//				{
//					id:            '123456-2222',
//					typeId:        'banner',
//					template:      'fixedHeight',
//					fixedHeights:  [
//						{
//							greaterThan:        0,
//							height:             500,
//							backgroundPosition: 'initial',
//							backgroundSize:     'contain',
//						},
//						{
//							greaterThan:        1200,
//							height:             260,
//							backgroundPosition: 'right 90%',
//							backgroundSize:     '71%',
//						},
//					],
//					backgroundUrl: 'https://www.visit-x.net/assets/img/teaser/teaser_nologin_02_02.jpg?v=2017-04-27',
//					htmlText:      `
//		<VXContent>
//			<div class="row">
//				<div class="col-xs-12">
//					<VXHeadline>
//						EXKLUSIV AUF VISIT-X!
//					</VXHeadline>
//					<VXText>
//						Schau Dir hier unzensierte Bilder und Videos von der süßen 18 jährigen<br>
//						an oder besuche sie bis zu 17 Stunden am Tag im Livechat.
//					</VXText>
//				</div>
//			</div>
//			<div class="row">
//				<div class="col-xs-12">
//					<div class="teaser__sexyvany-buttoncontainer" style="margin-top: 2em;">
//						<VXButton style="padding: 0.7em 5em 0.65em; font-size: 1.7rem; background-color: #43B31C; border-color: #43B31C;">Zum Profil</VXButton>
//					</div>
//				</div>
//			</div>
//		</VXContent>`,
//				},
//				{
//					id:            '123456-3333',
//					typeId:        'banner',
//					template:      'fixedHeight',
//					fixedHeights:  [
//						{
//							greaterThan:        0,
//							height:             500,
//							backgroundPosition: 'top right',
//							backgroundSize:     'cover',
//						},
//						{
//							greaterThan: 1200,
//							height:      260,
//						},
//					],
//					backgroundUrl: 'https://www.visit-x.net/assets/img/teaser/sexyvany/teaser-sexyvany.jpg',
//					htmlText:      `
//		<VXContent>
//			<div class="row">
//				<div class="col-xs-12">
//					<VXCaption>
//						<span style="color: #FF4D3C;">SexyVany</span> - Deutschlands jüngstes Camgirl
//					</VXCaption>
//					<VXHeadline>
//						EXKLUSIV AUF VISIT-X!
//					</VXHeadline>
//					<VXText>
//						Schau Dir hier unzensierte Bilder und Videos von der süßen 18 jährigen<br>
//						an oder besuche sie bis zu 17 Stunden am Tag im Livechat.
//					</VXText>
//				</div>
//			</div>
//			<div class="row">
//				<div class="col-xs-12">
//					<div class="teaser__sexyvany-buttoncontainer" style="margin-top: 2em;">
//						<VXButton style="padding: 0.7em 5em 0.65em; font-size: 1.7rem;">Zum Profil</VXButton>
//					</div>
//				</div>
//			</div>
//		</VXContent>`,
//				},
			],
		};
	}

	componentDidMount() {
		if (this.needTimerInterval()) {
			this.startInterval();
		}
	}

	componentDidUpdate() {
		if (this.needTimerInterval()) {
			this.startInterval();
		}
	}

	componentWillUnmount() {
		this.clearInterval();
	}

	needTimerInterval() {
		return this.state.configs && this.state.configs.length > 1 && this.props.delay > 0;
	}

	loadConfig() {
		if (this.props.providerConfig && this.props.providerConfig.vxqlEndpoint) {
			let vxql;
			vxql = VXQL(this.props.providerConfig.vxqlEndpoint, this.props.providerConfig.vxqlWebToken);
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
								greaterThan: 0,
								height:      typeConfig.height2,
							},
							{
								greaterThan: typeConfig.breakpoint1,
								height:      typeConfig.height1,
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
		if (typeof this.banners[config.id] !== 'undefined') {
			bannerDOM = this.banners[config.id];
		}
		// render banner
		else {
			this.banners[config.id] = bannerDOM = BannerBuilder(config, {
				onBannerClick: this.onBannerClick,
				onButtonClick: this.onButtonClick,
			});
		}

		return bannerDOM;
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextState.visibleIndex !== this.state.visibleIndex) {
			return false;
		} else {
			return true;
		}
	}

	onBannerClick(event) {
		if (typeof this.props.onBannerClick === 'function') {
			this.props.onBannerClick(event);
		}
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
			let bannerDOM, pointsDOM = [];
			const fixedHeights       = configs[0].fixedHeights;
			const TeaserPointElement = StyledElementFactory.getTeaserPoint();

			// generate banners from config array
			bannerDOM = configs.map((config, i) => {
				const setVisible = () => {
					this.clearInterval();
					this.setVisible(i);
				};

				if (configs.length > 1) {
					// banner switch control
					pointsDOM.push(<TeaserPointElement className={classNames.TeaserPoint + (i === 0 ? ' is-active' : '')}
					                                   onClick={setVisible}
					                                   key={i}
					                                   ref={(ref) => {
						                                   this.pointRefs[i] = ref;
					                                   }} />);
				}

				// define suite item
				const ListItemElement = StyledElementFactory.getSuiteItem();

				return <ListItemElement key={i} className={classNames.TeaserSuiteItem + (i === 0 ? ' is-active' : '')} ref={(ref) => {
					this.itemRefs[i] = ref;
				}}>{this.getBannerByConfig(config)}</ListItemElement>;
			});

			// define suite
			const ListElement = StyledElementFactory.getSuite({fixedHeights});

			if (bannerDOM.length > 0) {
				let PointsContainerElement;
				if (pointsDOM.length > 0) {
					PointsContainerElement = StyledElementFactory.getTeaserPointContainer({fixedHeights});
				}

				// hover actions
				const onMouseOver = () => {
					this.clearInterval();
				};
				const onMouseOut  = () => {
					this.startInterval();
				};

				content = (
					<ListElement onMouseEnter={onMouseOver} onMouseLeave={onMouseOut} className={classNames.TeaserSuite}>
						{bannerDOM}
						{PointsContainerElement && <PointsContainerElement>{pointsDOM}</PointsContainerElement>}
					</ListElement>
				);
			}
		}

		return content;
	}
}

BannerSuite.propTypes = {
	providerConfig: PropTypes.object,
	delay:          PropTypes.number,
	onBannerClick:  PropTypes.func,
};

BannerSuite.defaultProps = {
	providerConfig: {},
	delay:          10000,
};
