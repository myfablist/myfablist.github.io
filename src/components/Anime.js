import React from 'react';
import Slider from 'react-slick';
import { render } from 'react-dom';
import {Grid, Row, Col} from 'react-flexbox-grid';

class Anime extends React.Component {
  constructor(props) {
    super(props)
    console.log('Anime props',this.props.shows);
  }
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} md={6}>
            <h1>Stuff here</h1>
          </Col>
          <Col xs={12} md={6}>
            <h1>Stuff here</h1>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Anime;
