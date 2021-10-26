import React     from 'react';
import PropTypes from 'prop-types';

function CloseButton({onCloseFn}) {
	return <div className={'vxteaser-control--close'} onClick={onCloseFn} />;
}

CloseButton.propTypes = {
	onCloseFn: PropTypes.func,
};

export default CloseButton;
