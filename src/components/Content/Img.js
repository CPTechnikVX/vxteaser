import React      from 'react';
import PropTypes  from 'prop-types';
import Constants  from '../../utils/Constants';
import classnames from 'classnames';

/**
 * Image component
 */
export default class Img extends React.PureComponent {
	render() {
		const {alt, height, modifier, src, width} = this.props;
		const classList                      = [Constants.ClassName.Image];

		if (modifier) {
			classList.push(modifier);
		}

		return <img className={classnames(classList)} src={src} width={width} height={height} alt={alt} />;
	}
}

Img.propTypes = {
	alt:      PropTypes.string,
	height:   PropTypes.string,
	src:      PropTypes.string,
	modifier: PropTypes.string,
	width:    PropTypes.string,
};
