import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import s from '../styles/home.style';
let Heading = ['Books', 'Anime', 'TV Shows'];

class Home extends React.Component {
  render() {
    return (
      <div style={s.homeContent}>
        <div style={s.leftContent}>
          <div style={s.carousel}>
            <h1 style={s.carousel.heading}>Current Airing - Anime</h1>
            <div style={s.carousel.body}>
              <div style={s.carousel.body.card}>
              </div>
              <div style={s.carousel.body.card}>
              </div>
              <div style={s.carousel.body.card}>
              </div>
              <div style={s.carousel.body.card}>
              </div>
            </div>
          </div>
          <div style={s.carousel}>
            <h1 style={s.carousel.heading}>Current Airing - Movies</h1>
            <div style={s.carousel.body}></div>
          </div>
          <div style={s.carousel}>
            <h1 style={s.carousel.heading}>Current Airing - TV Shows</h1>
            <div style={s.carousel.body}></div>
          </div>
          <div style={s.carousel}>
            <h1 style={s.carousel.heading}>Airing - Books</h1>
            <div style={s.carousel.body}></div>
          </div>
        </div>
        <div style={s.rightContent}>
        </div>
      </div>
    );
  }
}

export default Home;
