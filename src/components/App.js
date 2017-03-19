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

  return (
    <div style={s.root}>
      <header style={s.header}>
        <div className="banner">
          <div className="bannerTitle">MyFabList</div>
        </div>
      </header>
      <nav style={s.nav}>
        <div style={s.pageLinkContainer}>
          <Interactive
            as={Link}
            {...s.link}
            to="/"
          >Home</Interactive>
        </div>
        <div style={s.pageLinkContainer}>
          <Interactive
            as={Link}
            {...s.link}
            to="/anime"
          >Anime</Interactive>
        </div>
        <div style={s.pageLinkContainer}>
          <Interactive
            as={Link}
            {...s.link}
            to="/book"
          >Books</Interactive>
        </div>
        <div style={s.pageLinkContainer}>
          <Interactive
            as={Link}
            {...s.link}
            to="/tvshow"
          >TV Shows</Interactive>
        </div>
        <div style={s.pageLinkContainer}>
          <Interactive
            as={Link}
            {...s.link}
            to="/movie"
          >Movies</Interactive>
        </div>
      </nav>

      {children}
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
    </div>
  );
}

App.propTypes = propTypes;

export default App;
