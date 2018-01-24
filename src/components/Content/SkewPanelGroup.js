import React     from 'react';
import PropTypes from 'prop-types';

export default class SkewPanelGroup extends React.PureComponent {
	static propTypes = {
		skewWidth: PropTypes.string,
	};

	render() {
		const skewStyleObj = {
			width: this.props.skewWidth,
			color: this.props.skewColor,
		};

		return <div className="vxteaser-panel-group">
			<div className="vxteaser-skew" style={skewStyleObj} />
			{this.props.children}</div>;
	}
}
