import React from 'react';
import Slider from 'react-slick';
import { render } from 'react-dom';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Header from './header';


class Anime extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Grid fluid>
				<Header headerPropLeft={['Top Rated','Most Popular','Seasonal']} headerPropRight={['search bar','logout','profile']}>
				</Header>
				<Header headerPropLeft={['Top Rated','Most Popular','Seasonal']}>
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
