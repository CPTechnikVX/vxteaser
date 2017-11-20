import React from 'react';

class Banner extends React.PureComponent {
	render() {
		const styleObj = {
			width:           '1300px',
			height:          '260px',
			backgroundColor: 'lightgray',
			background:      'no-repeat url("https://ph.vxnextgen.x/assets/img/teaser/teaser-top10-bonus-bg.jpg") top left',
		};

		return (<div style={styleObj}>Banner</div>);
	}
}

export default Banner;