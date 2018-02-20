import React      from 'react';
import PropTypes  from 'prop-types';
import Constants  from './../../utils/Constants';
import classnames from 'classnames';

export default class Headline extends React.PureComponent {

	static propTypes = {
		/** @ignore */
		children: PropTypes.node,
		/**
		 * CSS modifier
		 */
		modifier: PropTypes.string,
		type:     PropTypes.oneOf(['main', 'sub', 'text']),
	};

	static defaultProps = {
		type: 'text',
	};

	render() {
		const {children, modifier, type} = this.props;
		const classList                  = [];

		classList.push(Constants.ClassName.Headline);

		if (type) {
			classList.push(Constants.PrefixClassName.Type + type);
		}

		if (modifier) {
			classList.push(modifier);
		}

		return <div className={classnames(classList)}>{children}</div>;
	}
}
