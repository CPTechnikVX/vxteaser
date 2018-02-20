import React     from 'react';
import Constants from '../../utils/Constants';
import PropTypes from 'prop-types';

/**
 * Standard group of panels
 */
export default class PanelGroup extends React.PureComponent {
	static propTypes = {
		/** @ignore */
		children: PropTypes.node,
	};

	render() {
		const {children} = this.props;

		return <div className={Constants.ClassName.PanelGroup}>{children}</div>;
	}
}
