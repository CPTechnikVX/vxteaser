import React      from 'react';
import Constants  from '../../utils/Constants';
import PropTypes  from 'prop-types';
import classnames from 'classnames';

/**
 * Standard panel element
 */
export default class Panel extends React.PureComponent {
	render() {
		const classList                                  = [Constants.ClassName.Panel];
		const {children, config, modifier, theme, width} = this.props;
		const styleObj                                   = {
			width: config.width ? config.width : width,
		};

		if (theme) {
			classList.push('-theme-' + theme);
		}

		if (modifier) {
			classList.push(modifier);
		}

		return <div className={classnames(classList)} style={styleObj}>{children}</div>;
	}
}

Panel.propTypes = {
	/** @ignore */
	config:   PropTypes.object,
	/** @ignore */
	children: PropTypes.node,
	modifier: PropTypes.string,
	theme:    PropTypes.string,
	width:    PropTypes.string,
};
