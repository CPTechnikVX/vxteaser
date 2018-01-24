import React from 'react';

export default class Row extends React.PureComponent {
	render() {
		const colCount = React.Children.count(this.props.children);
		const width    = colCount > 0 ? 100 / colCount : 100;

		const childrenWithProps = React.Children.map(this.props.children,
			(child) => {
				return React.cloneElement(child, {
					width: child.props.width ? child.props.width : width,
				});
			}
		);

		return <div className={'vxteaser-row'}>{childrenWithProps}</div>;
	}
}
