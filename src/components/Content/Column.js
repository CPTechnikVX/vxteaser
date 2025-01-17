import React      from 'react';
import Constants  from '../../utils/Constants';
import PropTypes  from 'prop-types';
import classnames from 'classnames';

/**
 * Column element for the grid
 */
export default class Column extends React.PureComponent {
    render() {
        const {children, modifier, width} = this.props;
        const styleObj                    = {
            width: width ? width : 'auto',
        };
        const classList                   = [Constants.ClassName.Column];

        if (modifier) {
            classList.push(modifier);
        }

        return <div className={classnames(classList)} style={styleObj} data-testid="column">{children}</div>;
    }
}

Column.propTypes = {
    /** @ignore */
    children: PropTypes.node,
    modifier: PropTypes.string,
    width:    PropTypes.string,

};
