import React      from 'react';
import Constants  from '../../utils/Constants';
import classnames from 'classnames';
import PropTypes  from 'prop-types';

/**
 * Default free text element
 */
export default class Text extends React.PureComponent {
	static propTypes = {
		/** @ignore */
		children: PropTypes.node,
		color:    PropTypes.string,
	};

	render() {
		const {children, color} = this.props;
		const classList         = [];

		classList.push(Constants.ClassName.Text);

		if (color) {
			classList.push(Constants.PrefixClassName.Color + color);
		}

		return <span className={classnames(classList)}>{children}</span>;
	}
}
