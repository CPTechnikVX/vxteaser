import React      from 'react';
import Constants  from '../../utils/Constants';
import PropTypes  from 'prop-types';
import classnames from 'classnames';

/**
 * Standard group of panels
 */
export default class PanelGroup extends React.PureComponent {
	render() {
		const {children, config} = this.props;
		const classList          = [Constants.ClassName.PanelGroup];

		if (config && typeof config.aspectRatio !== 'undefined') {
			classList.push(Constants.ClassName.PanelGroup + '--' + Constants.Element.Tile);
		}

		return <div className={classnames(classList)}>{children}</div>;
	}
}

PanelGroup.propTypes = {
	/** @ignore */
	children: PropTypes.node,
	/** @ignore */
	config:   PropTypes.object,
};
