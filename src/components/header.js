import React, { PropTypes } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import { Header, HeaderItem} from './header';

class Header extends React.Component {
	constructor(props) {
		super(props);
	
		this.style = {
			backgroundColor: 'red',
		}
	}

	headerRight() {
		if (this.props.headerPropRight) {
      console.log(this.props.headerPropRight);
      return(
        <Col lg>
          <Row end="lg">	
            {this.props.headerPropRight.map((x)=><Col md lg xs={1}>{x}</Col>)}
          </Row>
        </Col>
      )
		}
    return (
        <div></div>
    )
	}
	render() {
		return (
			<Row md={12}>
				<Col lg={9}>
					<Row >	
						{this.props.headerPropLeft.map((x)=><Col style={this.style} md lg={1} xs={1}>{x}</Col>)}
					</Row>
				</Col>
        {this.headerRight()}
			</Row>
		)
	}
}

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

export default { Header, HeaderItem};
