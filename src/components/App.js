//import React from 'react';

//const App = () => <h1>Hello</h1>
//class App extends React.Component {
  //render(){
    //return <h1>Hello World</h1>
  //}
//}

import React, { PropTypes } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import s from '../styles/app.style';
import {Header} from './header';
import {HeaderItem} from './header';
import {Grid, Row, Col} from 'react-flexbox-grid';

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

App.projLink = "https://github.com/myfablist/myfablist.github.io"

//<nav style={s.mapMenu}>
  //{generateMapMenu()}
//</nav>
//
function App({children, routes}) {
  //console.log(s);
  //children = s.children;
  //routes = s.route;
  //function generateMapMenu() {
    //console.log(routes);
    //let name = routes.map(route => route.mapMenuTitle);
    //console.log('Name: ',name);
    //return <span>Boo</span>
  //}
  function generateMapMenu() {
    let path = '';

    function nextPath(route) {
      path += (
        (path.slice(-1) === '/' ? '' : '/') +
        (route.path === '/' ? '' : route.path)
      );
      return path;
    }

    console.log('Route: ',routes);
    return (
      routes.filter(route => route.mapMenuTitle)
        .map((route, index, array) => (
          <span key={index}>
            <Interactive
              as={Link}
              {...s.link}
              to={nextPath(route)}
            >{route.mapMenuTitle}</Interactive>
            {(index + 1) < array.length && ' / '}
          </span>
        ))
    );
  }

  const projLink =  "https://github.com/myfablist/myfablist.github.io"

	function headerItems() {
		let items = []
		let headers = [
			{ name: 'Home', href="/" },
			{ name: 'Anime', href="/anime" },
			{ name: 'TV Shows', href="/tvshow" },
			{ name: 'Movies', href="/movie" },
			{ name: 'Books', href="/book" },
		]
		for (let header in headers) {
			items.push(<HeaderItem name={header.name} href={header.href} Link={Link} slink={s.link}></HeaderItem>)
		}

		return items;	
	k
	

  return (
    <div style={s.root}>
      <Grid fluid>
        <Row>
          <Col sm={1} xs={1} md={2} lg={2}></Col>
          <Col sm={12} xs={12} md={8} lg={8}>
            <Row>
              <Col sm={12} xs={12} md={12} lg={12}>
                <header style={s.header}>
                  <div className="banner">
                    <div className="bannerTitle">MyFabList</div>
                  </div>
                </header>
              </Col>
            </Row>
            <Row>
            <Col md={12} sm={12} lg={12} xs={12} >
							<Header headerPropsLeft={['Anime','TV Show','Movies']}>
							</Header>
							<Header headerPropsLeft={headerItems()}></Header>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12} xs={12} lg={12}>
              {children}
            </Col>
          </Row>
          <Row>
          <Col md={12} sm={12} xs={12} lg={12}>
            <footer style={s.footer}>
              <div style={s.creditLine}>
                <span>Code & concept by </span>
                <Interactive
                  as="a"
                  href="https://github.com/clearnote01"
                  interactiveChild
                  focus={{}}
                  touchActive={{}}
                  touchActiveTapOnly
                >
                  <span {...s.childLink}>
                    Utkarsh&nbsp;  
                  </span>
                </Interactive>
                <Interactive
                  as="a"
                  href="https://github.com/hackboxlive"
                  interactiveChild
                  focus={{}}
                  touchActive={{}}
                  touchActiveTapOnly
                >
                  &&nbsp;
                  <span {...s.childLink}>
                    Sarv Shakti {routes.kids}
                  </span>
                </Interactive>
              </div>
            </footer>
          </Col>
          </Row>
        </Col>
        <Col sm={1} xs={1} md={2} lg={2}></Col>
        </Row>
      </Grid>
    </div>
  );
}

App.propTypes = propTypes;

export default App;
