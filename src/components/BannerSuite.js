import React         from 'react';
import PropTypes     from 'prop-types';
import BannerBuilder from '../utils/Builder';
import Constants     from './../utils/Constants';

export default class BannerSuite extends React.PureComponent {

	constructor(props) {
		super(props);

		this.banners       = {};
		this.itemRefs      = [];
		this.pointRefs     = [];
		this.timerInterval = null;
		this.resizeTimeout = null;

		// bind
		this.onBannerOver = this.onBannerOver.bind(this);
		this.onBannerOut  = this.onBannerOut.bind(this);
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
		};
	}

	componentDidMount() {
		window.addEventListener('resize', this.onResize);

		if (this.needTimerInterval()) {
			this.startInterval();
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		const breakpoint = this.props.configs && this.props.configs.length > 0 ? this.props.configs[0].fixedHeights[1]['greaterThan'] : null;

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
		return this.props.configs && this.props.configs.length > 1 && this.props.delay > 0;
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
						const el = this.itemRefs[oldIndex];
						el.classList.remove('is-active');
					}

					if (typeof this.pointRefs[oldIndex] !== 'undefined') {
						const point = this.pointRefs[oldIndex];
						point.classList.remove('is-active');
					}
				}

				if (typeof this.itemRefs[i] !== 'undefined') {
					const el = this.itemRefs[i];
					el.classList.add('is-active');
				}

				if (typeof this.pointRefs[i] !== 'undefined') {
					const point = this.pointRefs[i];
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
			const cnt = this.props.configs.length;

			if (cnt > 0) {
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
		const configs = this.props.configs;
		let content   = null;

		// is configuration provided?
		if (configs && configs.length > 0) {
			const pointsDOM    = [];
			const fixedHeights = configs[0].fixedHeights;

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
					pointsDOM.push(<div className={Constants.ClassName.Point + (i === 0 ? ' is-active' : '')}
					                    onClick={setVisible}
					                    key={i}
					                    ref={getRef}
					/>);
					/*eslint-enable*/
				}

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
				height: `${fixedHeights[1]['height']}px`
			};

			if (windowWidth < fixedHeights[1]['greaterThan']) {
				styleObj.height = `${fixedHeights[0]['height']}px`;
			}

			if (bannerDOM.length > 0) {
				content = (
					<div className={Constants.ClassName.Suite + ' ' + this.props.className}
					     style={styleObj}
					     onMouseEnter={this.onBannerOver}
					     onMouseLeave={this.onBannerOut}>
						{bannerDOM}
						{pointsDOM.length > 1 && <div className={Constants.ClassName.PointContainer}>{pointsDOM}</div>}
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
};

BannerSuite.defaultProps = {
	className: '',
	delay:     10000,
};
