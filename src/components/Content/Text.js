import React      from 'react';
import Constants  from '../../utils/Constants';
import classnames from 'classnames';
import PropTypes  from 'prop-types';

/**
 * Default free text element
 */
export default class Text extends React.PureComponent {
	render() {
		const {children, color, modifier} = this.props;
		const classList                   = [];

		classList.push(Constants.ClassName.Text);

		if (color) {
			classList.push(Constants.PrefixClassName.Color + color);
		}

		if (modifier) {
			classList.push(modifier);
		}

		return <span className={classnames(classList)}>{children}</span>;
	}
}

Text.propTypes = {
	/** @ignore */
	children: PropTypes.node,
	color:    PropTypes.string,
	modifier: PropTypes.string,
};
