import React from 'react';

export default class PanelGroup extends React.PureComponent {
	render() {
		return <div className="vxteaser-panel-group">{this.props.children}</div>;
	}
}
