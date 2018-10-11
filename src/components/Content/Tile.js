import React       from 'react';
import PropTypes   from 'prop-types';
import classnames  from 'classnames';
import Constants   from '../../utils/Constants';
import TileContent from './TileContent';
import ClickEvent  from '../../utils/ClickEvent';

/**
 * Main Tile component
 */
export default class Tile extends React.PureComponent {
	constructor(props) {
		super(props);

		// bind
		this.onClickFn = this.onClickFn.bind(this);
	}

	onClickFn(event) {
		event.preventDefault();
		event.stopPropagation();

		this.props.onClickFn(new ClickEvent(event, this, {
			link: this.props.link,
		}));
	}

	render() {
		const {children, config, modifier, theme, windowWidth} = this.props;

		if (config) {
			const classList = [];
			classList.push(Constants.ClassName.Tile);

			const styleObj = {
				backgroundImage: `url('${config.fixedHeights[0]['backgroundUrl']}')`,
			};

			if (theme) {
				classList.push('-theme-' + theme);
			}

			if (modifier) {
				classList.push(modifier);
			}

			return (
				<div className={classnames(classList)} style={styleObj} onClick={this.onClickFn}>
					<TileContent config={config} windowWidth={windowWidth}>{children}</TileContent>
				</div>
			);
		} else {
			return null;
		}
	}
}

Tile.propTypes = {
	/** @ignore */
	config:      PropTypes.object,
	/** @ignore */
	children:    PropTypes.node,
	modifier:    PropTypes.string,
	/** @ignore */
	onClickFn:   PropTypes.func,
	link:        PropTypes.string,
	theme:       PropTypes.string,
	/** @ignore */
	windowWidth: PropTypes.number,
};
