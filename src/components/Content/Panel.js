import React     from 'react';
import Constants from '../../utils/Constants';
import PropTypes from 'prop-types';

/**
 * Standard panel element
 */
export default class Panel extends React.PureComponent {
	static propTypes = {
		/** @ignore */
		config:   PropTypes.object,
		/** @ignore */
		children: PropTypes.node,
		width:    PropTypes.string,
	};

	render() {
		const {children, config, width} = this.props;
		const styleObj                  = {
			width: config.width ? config.width : width,
		};

		return <div className={Constants.ClassName.Panel} style={styleObj}>{children}</div>;
	}
}
