import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import s from '../styles/home.style';
import Slider from 'react-slick';
let Heading = ['Books', 'Anime', 'TV Shows'];

class Home extends React.Component {
  constructor() {
    super();
    this.settings = {
      dots: true,
    };
  }
	render() {
    let container = {
      color: '#333',
      background: '#419be0',
      width: '200px',
    }

	return (
		<div style={s.homeContent}>
		<div style={s.leftContent}>
       <div style={container}>
         <Slider {...this.settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
         </Slider>
       </div>
		</div>
		<div style={s.rightContent}>
		</div>
		</div>
	);
	}
}

export default Home;
