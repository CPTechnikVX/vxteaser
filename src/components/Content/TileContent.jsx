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

		return <div className={classnames(Constants.ClassName.TileContent, classList)} style={styleObj}>
			<div className={Constants.ClassName.TileContentInner}>{children}</div>
		</div>;
	}
}

TileContent.propTypes = {
	/** @ignore */
	config:      PropTypes.object,
	/** @ignore */
	children:    PropTypes.node,
	/** @ignore */
	windowWidth: PropTypes.number,
};
