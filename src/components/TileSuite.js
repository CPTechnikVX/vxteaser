import React         from 'react';
import PropTypes     from 'prop-types';
import BannerBuilder from '../utils/Builder';
import Constants     from './../utils/Constants';
import LinkHandler   from './LinkHandler';
import classnames    from 'classnames';
import CloseButton   from './Content/CloseButton';

/**
 * Top level banner suite component containing one or more banners
 */
export default class TileSuite extends React.PureComponent {
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

			typeConfig.id          = origTypeConfig.id;
			typeConfig.name        = origTypeConfig.name;
			typeConfig.content     = origTypeConfig.content;
			typeConfig.aspectRatio = [
				{
					backgroundUrl: origTypeConfig.backgroundUrl1,
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
			configs:      TileSuite.processConfigs(this.props.configs),
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
				configs: TileSuite.processConfigs(nextProps.configs),
			});
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		let retVal = true;

		if (nextState.visibleIndex !== this.state.visibleIndex) {
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
		return this.state.configs && this.state.configs.length > 1 && this.props.autoplaySpeed > 0;
	}

	/**
	 * Create or load banner via config
	 * @param config
	 * @returns {*}
	 */
	getBannerByConfig(config) {
		let bannerDOM;
		this.banners[config.id] = bannerDOM = BannerBuilder(
			config,
			{
				windowWidth: window.innerWidth,
			},
			this.props.onRenderNode ? this.props.onRenderNode : undefined
		);

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
		if (this.needTimerInterval()) {
			this.startInterval();
		}
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
		}, this.props.autoplaySpeed);
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
		const {className, customSuiteFn} = this.props;
		const {configs}                  = this.state;
		let content                      = null;
		const suiteClassNames            = [
			Constants.ClassName.Suite,
			className,
		];

		// is configuration provided?
		if (configs && configs.length > 0) {
			// generate banners from config array
			const bannerDOM = configs.map((config, i) => {
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
				       >{this.getBannerByConfig(config)}
					{customSuiteFn && <CloseButton onCloseFn={this.onCloseClick} />}
				</div>;
			});

			if (bannerDOM.length > 0) {
				if (customSuiteFn) {
					content = customSuiteFn(bannerDOM);
				} else {
					content = (
						<div className={classnames(suiteClassNames)}
						     onMouseEnter={this.onBannerOver}
						     onMouseLeave={this.onBannerOut}
						>
							{bannerDOM}
							<CloseButton onCloseFn={this.onCloseClick} />
						</div>
					);
				}
			}
		}

		return content;
	}
}

TileSuite.propTypes = {
	className:     PropTypes.string,
	configs:       PropTypes.array,
	customSuiteFn: PropTypes.func,
	autoplaySpeed: PropTypes.number,
	onCloseFn:     PropTypes.func,
	onClickFn:     PropTypes.func,
	onRenderNode:  PropTypes.func,
};

TileSuite.defaultProps = {
	className:     '',
	autoplaySpeed: 10000,
};
