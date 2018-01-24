import React from 'react';

export default class Column extends React.PureComponent {
	render() {
		const styleObj = {
			width: this.props.width + '%',
			float: 'left',
		};

		return <div className={'vxteaser-col'} style={styleObj}>{this.props.children}</div>;
	}
}

