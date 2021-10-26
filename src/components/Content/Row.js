import React      from 'react';
import PropTypes  from 'prop-types';
import classnames from 'classnames';
import Constants  from '../../utils/Constants';

/**
 * Row for the grid
 */
export default class Row extends React.PureComponent {
	render() {
		const {children, modifier} = this.props;
		const colCount             = React.Children.count(children);
		const width                = colCount > 0 ? 100 / colCount : 100;
		const classList            = [Constants.ClassName.Row];

		const childrenWithProps = React.Children.map(
			children,
			(child) => React.cloneElement(child, {
				width: child.props.width ? child.props.width : width + '%',
			})
		);

		if (modifier) {
			classList.push(modifier);
		}

		return <div className={classnames(classList)}>{childrenWithProps}</div>;
	}
}

Row.propTypes = {
	/** @ignore */
	children: PropTypes.node,
	modifier: PropTypes.string,
};
