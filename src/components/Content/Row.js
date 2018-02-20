import React     from 'react';
import PropTypes from 'prop-types';
import Constants from '../../utils/Constants';

/**
 * Row for the grid
 */
export default class Row extends React.PureComponent {

	static propTypes = {
		/** @ignore */
		children: PropTypes.node,
	};

	render() {
		const {children} = this.props;
		const colCount   = React.Children.count(children);
		const width      = colCount > 0 ? 100 / colCount : 100;

		const childrenWithProps = React.Children.map(
			children,
			(child) => React.cloneElement(child, {
				width: child.props.width ? child.props.width : width,
			})
		);

		return <div className={Constants.ClassName.Row}>{childrenWithProps}</div>;
	}
}
