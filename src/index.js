import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';

//render(
    //<App />,
    //document.getElementById('root')
//);
import Home from './components/Home';
import TVShow from './components/TVShow';
import Movie from './components/Movie';
import Anime from './components/Anime';
import Book from './components/Book';
import People from './components/People';
import PageNotFound from './components/PageNotFound';
import ExampleComponent from './components/ExampleComponent';
import ExampleTwoDeepComponent from './components/ExampleTwoDeepComponent';
import TopRatedAnime from './components/TopRatedAnime';


const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />
    <Route path="anime" shows="life, bitch, fuck" mapMenuTitle="ANIME" component={Anime} >
      <Route path="top_rated" mapMenuTitle="TOP Rated anime" component={TopRatedAnime}>
      </Route>
    </Route>
    <Route path="book" mapMenuTitle="BOOK" component={Book}>
    </Route>
    <Route path="tvshow" mapMenuTitle="TVSHOW" component={TVShow}>
    </Route>
    <Route path="movie" mapMenuTitle="MOVIE" component={Movie}>
    </Route>
    <Route path="people" mapMenuTitle="People" component={People}>
    </Route>
    <Route path="top_rated" mapMenuTitle="TOP Rated anime" component={TopRatedAnime}>
    </Route>

    <Route path="example" mapMenuTitle="Example" component={ExampleComponent}>
      <Route path="two-deep" mapMenuTitle="Two Deep" component={ExampleTwoDeepComponent} />
    </Route>

    <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
);

const fire = {
  name: 'Utkarsh',
  age: 20,
  blood: 'K'
}

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
