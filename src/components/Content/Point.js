import React     from 'react';
import PropTypes from 'prop-types';

/**
 * Slider Point component
 */
export default class Point extends React.PureComponent {
	constructor(props) {
		super(props);

		// bind
		this.getRef    = this.getRef.bind(this);
		this.onClickFn = this.onClickFn.bind(this);
	}

	getRef(ref) {
		return this.props.getRef(ref, this.props.index);
	}

	onClickFn(event) {
		event.preventDefault();
		event.stopPropagation();

		this.props.onClickFn(this.props.index);
	}

	render() {
		const {isActive} = this.props;

		return (<span className={'vxteaser-points__item' + (isActive ? ' is-active' : '')} onClick={this.onClickFn} ref={this.getRef} />);
	}
}

Point.propTypes = {
	getRef:    PropTypes.func,
	index:     PropTypes.number,
	isActive:  PropTypes.bool,
	onClickFn: PropTypes.func,
};
