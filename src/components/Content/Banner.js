import React         from 'react';
import PropTypes     from 'prop-types';
import classnames    from 'classnames';
import Constants     from '../../utils/Constants';
import BannerContent from './BannerContent';
import ClickEvent    from '../../utils/ClickEvent';
import {isVideoUrl}  from '../../utils/Helper';

/**
 * Main Banner component
 */
export default class Banner extends React.PureComponent {
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
			const isVideo = isVideoUrl(config.fixedHeights[0]['backgroundUrl']);
			const classList = [];
			let videoUrl = isVideo ? config.fixedHeights[0]['backgroundUrl'] : '';
			let imageUrl = videoUrl ? "" : config.fixedHeights[0]['backgroundUrl'];
			let height   =  "100%";
			let wrapperHeight = config.fixedHeights[1]['height'] + "px";
		
			if (windowWidth < 1200) {
				videoUrl = isVideo ? config.fixedHeights[1]['backgroundUrl'] : '';
				imageUrl = videoUrl ? "" : config.fixedHeights[1]['backgroundUrl'];
				height   = videoUrl ? "100%" : config.fixedHeights[1]['height'] + "px";
				wrapperHeight = config.fixedHeights[0]['height'] + "px";

				classList.push(Constants.ClassName.BannerNoSkew);
				classList.push('-view2');
			} else {
				classList.push(Constants.ClassName.Banner);
				classList.push('-view1');
			}

			if (theme) {
				classList.push('-theme-' + theme);
			}

			if (modifier) {
				classList.push(modifier);
			}

			const style = {
				width: '100%',
				height: height,
				objectFit: 'cover',
				position: 'absolute',
				top: 0,
			};

			return (
				<div className={classnames(classList)} onClick={this.onClickFn} data-id={config.id} style={{height: wrapperHeight}}>
					{videoUrl && <video playsInline autoPlay muted loop style={style} key={videoUrl}><source src={videoUrl} /></video>}
					{imageUrl && <img src={imageUrl} loading="lazy" style={style} />}
					<BannerContent config={config} windowWidth={windowWidth}>{children}</BannerContent>
				</div>
			);
		} else {
			return null;
		}
	}
}

Banner.propTypes = {
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
