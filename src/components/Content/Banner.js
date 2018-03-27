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
				backgroundImage: `url('${config.fixedHeights[0]['backgroundUrl']}')`,
				height:          `${config.fixedHeights[1]['height']}px`,
			};

			if (windowWidth < config.fixedHeights[1]['greaterThan']) {
				styleObj.backgroundImage = `url('${config.fixedHeights[1]['backgroundUrl']}')`;
				styleObj.height          = `${config.fixedHeights[0]['height']}px`;

				classList.push(Constants.ClassName.BannerNoSkew);
				classList.push('-view2');
			} else {
				classList.push(Constants.ClassName.Banner);
				classList.push('-view1');
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
