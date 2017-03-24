import React, { PropTypes } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import {Grid, Row, Col} from 'react-flexbox-grid';
class HeaderItem extends React.Component {
	render() {
		return (
    	<Interactive
        as={this.props.Link}
        {...this.props.slink}
        to={this.props.href}>
				{this.props.name}
			</Interactive>
		)
	}
}	
export default HeaderItem;
