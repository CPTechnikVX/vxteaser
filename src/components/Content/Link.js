import React      from 'react';
import PropTypes  from 'prop-types';
import Constants  from '../../utils/Constants';
import classnames from 'classnames';
import ClickEvent from '../../utils/ClickEvent';

/**
 * General link component
 */
export default class Link extends React.PureComponent {
	render() {
		const {children, color, link, modifier} = this.props;
		const classList                         = [];
		let onClickFn;

		if (color) {
			classList.push(Constants.PrefixClassName.Color + color);
		}

		if (modifier) {
			classList.push(modifier);
		}

		if (link) {
			onClickFn = (e) => {
				e.preventDefault();
				e.stopPropagation();

				this.props.onClickFn(new ClickEvent(e, this, {
					link: this.props.link,
				}));
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
	modifier: PropTypes.string,
	/** @ignore */
	onClickFn: PropTypes.func,
};
