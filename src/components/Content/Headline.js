import React      from 'react';
import PropTypes  from 'prop-types';
import Constants  from './../../utils/Constants';
import classnames from 'classnames';

export default class Headline extends React.PureComponent {

	static propTypes = {
		type: PropTypes.oneOf(['main', 'sub', 'text']),
	};

	static defaultProps = {
		type: 'text',
	};

	render() {
		const classList = [];

		classList.push(Constants.ClassName.Headline);

		if (this.props.type) {
			classList.push(Constants.PrefixClassName.Type + this.props.type)
		}

		return <div className={classnames(classList)}>{this.props.children}</div>;
	}
}
