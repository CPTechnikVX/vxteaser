import React      from 'react';
import Constants  from '../../utils/Constants';
import classnames from 'classnames';
import PropTypes  from 'prop-types';

/**
 * Content of the banner
 */
export default class TileContent extends React.PureComponent {
	render() {
		const {children, config} = this.props;
		const classList          = [];
		const styleObj           = {};
		config.width             = undefined;

		const childrenBlock = Array.isArray(children) ? children : [children];

		// addon bottom right
		const bottomRight = config.onHook ? config.onHook({type: Constants.HookType.RenderBottomRight, config}) : null;
		// insert before last element
		if (bottomRight) {
			childrenBlock.splice(children.length - 1, 0, <div style={{position: 'relative', justifySelf: 'right'}}>{bottomRight}</div>);
		}

		return <div className={classnames(Constants.ClassName.TileContent, classList)} style={styleObj}>
			<div className={Constants.ClassName.TileContentInner}>{childrenBlock}</div>
		</div>;
	}
}

TileContent.propTypes = {
	/** @ignore */
	config: PropTypes.object,
	/** @ignore */
	children: PropTypes.node,
	/** @ignore */
	windowWidth: PropTypes.number,
};
