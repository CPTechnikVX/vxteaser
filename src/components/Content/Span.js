import React         from 'react';
import PropTypes     from 'prop-types';
import classnames    from 'classnames';
import CommonWrapper from '../CommonWrapper';

/**
 * Default span element
 */
export default class Span extends React.PureComponent {
	render() {
		const {children, modifier} = this.props;
		const classList            = [];

		if (modifier) {
			classList.push(modifier);
		}

		return <CommonWrapper childProps={this.props}><span className={classnames(classList)}>{children}</span></CommonWrapper>;
	}
}

Span.propTypes = {
	/** @ignore */
	children: PropTypes.node,
	modifier: PropTypes.string,
};
