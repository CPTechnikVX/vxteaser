import React       from 'react';
import PropTypes   from 'prop-types';
import Constants   from '../../utils/Constants';
import classnames  from 'classnames';
import LinkHandler from '../LinkHandler';

/**
 * Skewed panel
 */
export default class PanelSkew extends React.PureComponent {
	static propTypes = {
		/** @ignore */
		config:      PropTypes.object,
		/** @ignore */
		children:    PropTypes.node,
		/**
		 * Textual color definition
		 */
		color:       PropTypes.oneOf(['primary']),
		link:        PropTypes.string,
		modifier:    PropTypes.string,
		src:         PropTypes.string,
		/** @ignore */
		windowWidth: PropTypes.number,
	};

	render() {
		const {config, link, modifier, src, windowWidth} = this.props;
		const classList                                  = [];
		const styleObj                                   = {};
		let onClickFn;

		classList.push(Constants.ClassName.PanelSkew);

		if (link) {
			onClickFn = (e) => {
				e.preventDefault();
				e.stopPropagation();

				LinkHandler.handle(link);
			};
		}

		if (modifier) {
			classList.push(modifier);
		}

		if (windowWidth < config.fixedHeights[1]['greaterThan']) {
			styleObj.top = `-${config.fixedHeights[1]['height']}px`;
		}

		return <a className={classnames(classList)} onClick={onClickFn} style={styleObj}>
			<img className="vxteaser-panel--skew__image" src={src} alt="" />
		</a>;
	}
}