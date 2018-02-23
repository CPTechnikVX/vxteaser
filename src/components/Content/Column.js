import React     from 'react';
import Constants from '../../utils/Constants';
import PropTypes from 'prop-types';

/**
 * Column element for the grid
 */
export default class Column extends React.PureComponent {
	render() {
		const {children, width} = this.props;
		const styleObj          = {
			width: width ? width : 'auto',
			float: 'left',
		};

		return <div className={Constants.ClassName.Column} style={styleObj}>{children}</div>;
	}
}

Column.propTypes = {
	/** @ignore */
	children: PropTypes.node,
	width:    PropTypes.string,

};
