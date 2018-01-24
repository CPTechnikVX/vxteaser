import React from 'react';

export default class Panel extends React.PureComponent {
	render() {
		const styleObj = {
			width: this.props.config.width ? this.props.config.width : this.props.width,
		};

		return <div className="vxteaser-panel" style={styleObj}>{this.props.children}</div>;
	}
}
