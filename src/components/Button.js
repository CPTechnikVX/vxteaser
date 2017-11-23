import React from 'react';
import styled from 'styled-components';

class Banner extends React.PureComponent {
	render() {
		const Button = styled.a`    
			border-radius: 2px;
		    display: inline-block;
		    font-family: 'Roboto';
		    cursor: pointer;
		    min-width: 50px;
		    position: relative;
		    text-align: left;
		    text-decoration: none;
		    transition: all 0.15s linear;
		    vertical-align: top;
		    padding: 0.7em 5em 0.65em;
		    font-size: 1.7rem;
		    background-color: #1F93E9;
		    border: 1px solid #1F93E9;
		    color: #FFFFFF;
		    text-transform: none;
		`;

		return <Button onClick={this.props.onClick}>{this.props.children}</Button>;
	}
}

export default Banner;