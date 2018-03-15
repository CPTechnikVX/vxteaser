import React         from 'react';
import PropTypes     from 'prop-types';
import classnames    from 'classnames';
import Constants     from '../../utils/Constants';
import BannerContent from './BannerContent';
import ClickEvent    from '../../utils/ClickEvent';

/**
 * Main Banner component
 */
export default class Banner extends React.PureComponent {
	constructor(props) {
		super(props);

		// bind
		this.onClickFn = this.onClickFn.bind(this);
	}

	onClickFn(event) {
		event.preventDefault();
		event.stopPropagation();

		this.props.onClickFn(new ClickEvent(event, this, {
			link: this.props.link,
		}));
	}

	render() {
		const {children, config, theme, windowWidth} = this.props;

		if (config) {
			const classList = [];

			const styleObj = {
				background:     `no-repeat url('${config.fixedHeights[0]['backgroundUrl']}') top right`,
				backgroundSize: `${config.fixedHeights[1]['backgroundSize'] ? config.fixedHeights[1]['backgroundSize'] : 'contain'}`,
				height:         `${config.fixedHeights[1]['height']}px`,
			};

			if (windowWidth < config.fixedHeights[1]['greaterThan']) {
				styleObj.background     = `no-repeat url('${config.fixedHeights[1]['backgroundUrl']}') top right`;
				styleObj.backgroundSize = `${config.fixedHeights[0]['backgroundSize'] ? config.fixedHeights[0]['backgroundSize'] : 'auto'}`;
				styleObj.height         = `${config.fixedHeights[0]['height']}px`;

				classList.push(Constants.ClassName.BannerNoSkew);
			} else {
				classList.push(Constants.ClassName.Banner);
			}

			if (theme) {
				classList.push('-theme-' + theme);
			}

			return (
				<div className={classnames(classList)} style={styleObj} onClick={this.onClickFn}>
					<BannerContent config={config} windowWidth={windowWidth}>{children}</BannerContent>
				</div>
			);
		} else {
			return null;
		}
	}
}

Banner.propTypes = {
	/** @ignore */
	config:      PropTypes.object,
	/** @ignore */
	children:    PropTypes.node,
	/** @ignore */
	onClickFn:   PropTypes.func,
	link:        PropTypes.string,
	theme:       PropTypes.string,
	/** @ignore */
	windowWidth: PropTypes.number,
};
