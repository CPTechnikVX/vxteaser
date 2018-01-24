import React      from 'react';
import PropTypes  from 'prop-types';
import classnames from 'classnames';
import Constants  from '../../utils/Constants';

export default class Banner extends React.PureComponent {

	constructor(props) {
		super(props);

		// bind
		this.onBannerClick = this.onBannerClick.bind(this);
	}

	onBannerClick = (event) => {
		event.preventDefault();
		event.stopPropagation();

		alert(this.props.url);

		if (typeof this.props.onBannerClick === 'function') {
			this.props.onBannerClick();
		}
	}

	render() {
		const {config, windowWidth} = this.props;
		const classList             = [];

		const styleObj = {
			height:         `${config.fixedHeights[1]['height']}px`,
			color:          `${config.fixedHeights[0]['color']}`,
			background:     `no-repeat url('${config.fixedHeights[0]['backgroundUrl']}') top right`,
			backgroundSize: `${config.fixedHeights[1]['backgroundSize'] ? config.fixedHeights[1]['backgroundSize'] : 'contain'}`,
		};

		if (windowWidth < config.fixedHeights[1]['greaterThan']) {
			styleObj.background     = `no-repeat url('${config.fixedHeights[1]['backgroundUrl']}') top right`;
			styleObj.backgroundSize = `${config.fixedHeights[0]['backgroundSize'] ? config.fixedHeights[0]['backgroundSize'] : 'contain'}`;
			styleObj.height         = `${config.fixedHeights[0]['height']}px`;
			styleObj.height         = `${config.fixedHeights[0]['height']}px`;

			classList.push(Constants.ClassName.BannerNoSkew);
		} else {
			classList.push(Constants.ClassName.Banner);
		}

		if (this.props.theme) {
			classList.push('-theme-' + this.props.theme);
		}

		const childrenWithProps = React.Children.map(this.props.children,
			(child) => {
				return React.cloneElement(child, {
					windowWidth: windowWidth,
				});
			}
		);

		return (
			<div className={classnames(classList)} style={styleObj} onClick={this.onBannerClick}>
				{childrenWithProps}
			</div>
		);

	}
}

Banner.propTypes = {
	/** @ignore */
	config:        PropTypes.object,
	/** @ignore */
	children:      PropTypes.node,
	/** @ignore */
	onBannerClick: PropTypes.func,
	/** @ignore */
	windowWidth:   PropTypes.number,
};

Banner.defaultProps = {
	config:      {},
	windowWidth: window.innerWidth,
};
