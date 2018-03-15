import React         from 'react';
import PropTypes     from 'prop-types';
import BannerBuilder from '../utils/Builder';
import Constants     from './../utils/Constants';
import LinkHandler   from './LinkHandler';

/**
 * Top level banner suite component containing one or more banners
 */
export default class BannerSuite extends React.PureComponent {
	/**
	 * Process data from provider to internal form
	 * @param configs
	 * @returns {Array}
	 */
	static processConfigs(configs) {
		if (!configs || configs.length === 0) {
			return [];
		}

		return configs.map((origTypeConfig) => {
			const typeConfig = {};

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

			return typeConfig;
		});
	}


	constructor(props) {
		super(props);

		this.banners       = {};
		this.itemRefs      = [];
		this.timerInterval = null;
		this.resizeTimeout = null;

		// bind
		this.onBannerOver = this.onBannerOver.bind(this);
		this.onBannerOut  = this.onBannerOut.bind(this);
		this.onCloseClick = this.onCloseClick.bind(this);
		this.onNextClick  = this.onNextClick.bind(this);
		this.onPrevClick  = this.onPrevClick.bind(this);
		this.onResize     = this.onResize.bind(this);

		// state
		this.state = this.getInitialState();
	}

	/**
	 * initial state
	 * @returns {Object}
	 */
	getInitialState() {
		return {
			visibleIndex: 0,
			mouseOver:    false,
			windowWidth:  window.innerWidth,
			configs:      BannerSuite.processConfigs(this.props.configs),
		};
	}

	componentDidMount() {
		window.addEventListener('resize', this.onResize);

		if (this.needTimerInterval()) {
			this.startInterval();
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.configs) {
			this.setState({
				configs: BannerSuite.processConfigs(nextProps.configs),
			});
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		const breakpoint = this.state.configs && this.state.configs.length > 0 ? this.state.configs[0].fixedHeights[1]['greaterThan'] : null;
		let retVal       = true;

		if (nextState.visibleIndex !== this.state.visibleIndex) {
			retVal = false;
		} else if (breakpoint && nextState.windowWidth !== this.state.windowWidth
			&& !(this.state.windowWidth < breakpoint && nextState.windowWidth >= breakpoint
				|| this.state.windowWidth >= breakpoint && nextState.windowWidth < breakpoint)
		) {
			retVal = false;
		}

		return retVal;
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

	/**
	 * Create or load banner via config
	 * @param config
	 * @returns {*}
	 */
	getBannerByConfig(config) {
		let bannerDOM;
		this.banners[config.id] = bannerDOM = BannerBuilder(config, {
			windowWidth: window.innerWidth,
		});

		return bannerDOM;
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
	 * Mouse over banner
	 */
	onBannerOver() {
		this.clearInterval();
	}

	/**
	 * Mouse out of banner
	 */
	onBannerOut() {
		this.startInterval();
	}

	/**
	 * Click previous arrow
	 */
	onPrevClick() {
		this.setVisible(this.state.visibleIndex - 1);
	}

	/**
	 * Click next arrow
	 */
	onNextClick() {
		this.setVisible(this.state.visibleIndex + 1);
	}

	/**
	 * Click on close button
	 */
	onCloseClick(event) {
		event.preventDefault();
		event.stopPropagation();

		if (this.props.onCloseFn) {
			this.props.onCloseFn();
		}
	}

	/**
	 * Set visible item via index
	 * @param i
	 */
	setVisible(i) {
		if (i < 0) {
			i = this.itemRefs.length - 1;
		} else if (i >= this.itemRefs.length) {
			i = 0;
		}

		if (this.itemRefs && typeof this.itemRefs[i] !== 'undefined') {
			const oldIndex = this.state.visibleIndex;

			this.setState({visibleIndex: i}, () => {
				if (oldIndex !== i) {
					if (typeof this.itemRefs[oldIndex] !== 'undefined') {
						const el = this.itemRefs[oldIndex];
						el.classList.remove('is-active');
					}
				}

				if (typeof this.itemRefs[i] !== 'undefined') {
					const el = this.itemRefs[i];
					el.classList.add('is-active');
				}
			});
		}
	}

	/**
	 * Activate timer interval for switching items
	 */
	startInterval() {
		this.clearInterval();

		this.timerInterval = window.setInterval(() => {
			const cnt = this.state.configs.length;

			if (cnt > 0) {
				this.setVisible((this.state.visibleIndex + 1) % cnt);
			}
		}, this.props.delay);
	}

	/**
	 * Deactivate timer interval for switching items
	 */
	clearInterval() {
		if (this.timerInterval) {
			window.clearInterval(this.timerInterval);
			this.timerInterval = null;
		}
	}

	render() {
		const {className} = this.props;
		const {configs}   = this.state;
		let content       = null;

		// is configuration provided?
		if (configs && configs.length > 0) {
			const pointsDOM    = [];
			const fixedHeights = configs[0].fixedHeights;

			// generate banners from config array
			const bannerDOM = configs.map((config, i) => {
				if (configs.length > 1) {
					// banner switch control
					pointsDOM.push(i);
				}

				// assign handlers
				config.onClickFn = typeof this.props.onClickFn === 'function' ? (clickEvent) => {
					clickEvent.config = config;

					this.props.onClickFn(clickEvent);
				} : LinkHandler.handle;

				return <div key={i} className={Constants.ClassName.SuiteItem + (i === 0 ? ' is-active' : '')} ref={(ref) => {
					if (ref) {
						this.itemRefs[i] = ref;
					}
				}}
				       >{this.getBannerByConfig(config)}</div>;
			});

			// define suite
			const windowWidth = this.state.windowWidth;
			const styleObj    = {
				height: `${fixedHeights[1]['height']}px`,
			};

			if (windowWidth < fixedHeights[1]['greaterThan']) {
				styleObj.height = `${fixedHeights[0]['height']}px`;
			}

			if (bannerDOM.length > 0) {
				content = (
					<div className={Constants.ClassName.Suite + ' ' + className}
					     style={styleObj}
					     onMouseEnter={this.onBannerOver}
					     onMouseLeave={this.onBannerOut}
					>
						{pointsDOM.length > 1 &&
						<div className={'vxteaser-arrow--left'} onClick={this.onPrevClick} />}
						{bannerDOM}
						<div className={'vxteaser-control--close'} onClick={this.onCloseClick} />
						{pointsDOM.length > 1 &&
						<div className={'vxteaser-arrow--right'} onClick={this.onNextClick} />}
					</div>
				);
			}
		}

		return content;
	}
}

BannerSuite.propTypes = {
	className: PropTypes.string,
	configs:   PropTypes.array,
	delay:     PropTypes.number,
	onCloseFn: PropTypes.func,
	onClickFn: PropTypes.func,
};

BannerSuite.defaultProps = {
	className: '',
	delay:     10000,
};
