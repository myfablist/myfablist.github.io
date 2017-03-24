import React, { PropTypes }  from 'react';
import Slider from 'react-slick';
import { render } from 'react-dom';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Header from './header';
import HeaderItem from './HeaderItems';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import s from '../styles/app.style';

const propTypes = {
  children: PropTypes.element,
};

class Anime extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    function headerItems() {
      let items = []
      let headers = [
        { name: 'Top Rated', href:"/anime/top_rated" },
        { name: 'Most Popular', href:"most_popular" },
        { name: 'Seasonal', href:"seasonal" },
        { name: 'People', href:"people" },
      ]
      for (let i in headers) {
        items.push(<HeaderItem name={headers[i].name} href={headers[i].href} Link={Link} slink={s.link}></HeaderItem>)
      }
      console.log('CHild', this.props.children);
      return items;	
    }
    return (
      <Grid fluid>
				<Header headerPropLeft={headerItems.bind(this)()}>
				</Header>
        { this.props.children || 
        <Row>
          <Col xs={6} md={9} lg={6}>
						<h1>Body</h1>
            Anime
          </Col>
          <Col xs={6} md={3} lg={6}>
						<h1>Sidebar</h1>	
          </Col>
        </Row>
        }
      </Grid>
    )
  }
}

Anime.propTypes = propTypes;
export default Anime;
