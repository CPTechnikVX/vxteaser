import React      from 'react';
import PropTypes  from 'prop-types';
import Constants  from '../../utils/Constants';
import classnames from 'classnames';

/**
 * Group of skewed panels
 */
export default class SkewPanelGroup extends React.PureComponent {
	static propTypes = {
		/** @ignore */
		children:  PropTypes.node,
		modifier:  PropTypes.string,
		/**
		 * width in per cent, like '45%'
		 */
		skewWidth: PropTypes.string,
	};

	render() {
		const {children, modifier, skewWidth} = this.props;
		const classList                       = [];
		const skewStyleObj                    = {
			width: skewWidth,
		};

		classList.push(Constants.ClassName.PanelGroup);

		if (modifier) {
			classList.push(modifier);
		}

		return <div className={classnames(classList)}>
			<div className={Constants.ClassName.Skew} style={skewStyleObj} />
			{children}
		</div>;
	}
}
