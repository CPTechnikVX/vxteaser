import React       from 'react';
import PropTypes   from 'prop-types';
import Constants   from '../../utils/Constants';
import classnames  from 'classnames';
import LinkHandler from '../LinkHandler';

/**
 * General link component
 */
export default class Link extends React.PureComponent {
	render() {
		const {children, color, link} = this.props;
		const classList               = [];
		let onClickFn;

		if (color) {
			classList.push(Constants.PrefixClassName.Color + color);
		}

		if (link) {
			onClickFn = (e) => {
				e.preventDefault();
				e.stopPropagation();

				LinkHandler.handle(link);
			};
		}

		return <a className={classnames(classList)} onClick={onClickFn}>{children}</a>;
	}
}

Link.propTypes = {
	/** @ignore */
	children: PropTypes.node,
	color:    PropTypes.string,
	link:     PropTypes.string,
};
