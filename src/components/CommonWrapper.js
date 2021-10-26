import React from 'react';

/**
 * Common wrapper
 */
export default function CommonWrapper(props) {
	const styleObj = {};

	const absProps = ['top', 'right', 'bottom', 'left'];
	for (const prop in absProps) {
		const propName = absProps[prop];

		if (props.childProps[propName]) {
			styleObj['position'] = 'absolute';
			styleObj[propName]   = props.childProps[propName];
		}
	}

	// update style
	const newProps = {...props.children.props, style: styleObj};

	return React.cloneElement(props.children, newProps);
}
