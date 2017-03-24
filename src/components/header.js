import React, { PropTypes } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';

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
            {this.props.headerPropRight.map((x)=><Col md={1} lg={1} xs={1}>{x}</Col>)}
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
			<Row> 
				<Col style={{backgroundColor: 'gray'}} md={9} xs={9} sm={9} lg={9}>
					<Row style={{backgroundColor: 'green'}}>	
						{this.props.headerPropLeft.map((x)=><Col style={this.style} md={2} lg={2} xs={4}>{x}</Col>)}
					</Row>
				</Col>
        {this.headerRight()}
			</Row>
		)
	}
}

export default Header;
