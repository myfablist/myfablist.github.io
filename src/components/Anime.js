import React from 'react';
import Slider from 'react-slick';
import { render } from 'react-dom';
import {Grid, Row, Col} from 'react-flexbox-grid';

class Header extends React.Component {
	constructor(props) {
		super(props);
	
		this.color = {
			backgroundColor: 'red',
		}
	}
	headerRight() {
		if (this.props.headerPropRight) {
		}
	}
			
	render() {
		return (
			<Row>
				<Col lg={9}>
					<Row >	
						{this.props.headerPropLeft.map((x)=><Col style={this.color} md lg={1} xs={1}>{x}</Col>)}
					</Row>
				</Col>
				<Col lg>
					<Row end="lg">	
						{this.props.headerPropRight.map((x)=><Col md lg xs={1}>{x}</Col>)}
					</Row>
				</Col>
			</Row>
		)
	}
}

class Anime extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Grid fluid>
				<Header headerPropLeft={['Top Rated','Most Popular','Seasonal']} headerPropRight={['search bar','logout','profile']}>
				</Header>
        <Row>
          <Col xs={6} md={9} lg={6}>
						<h1>Body</h1>
          </Col>
          <Col xs={6} md={3} lg={6}>
						<h1>Sidebar</h1>	
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Anime;
