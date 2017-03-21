import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import s from '../styles/home.style';
import Slider from 'react-slick';
let Heading = ['Books', 'Anime', 'TV Shows'];


class LeftNavButton extends React.Component {
  render() {
    return <button {...this.props}>Previous</button>
  }
}
class RightNavButton extends React.Component {
  render() {
    return <button {...this.props}>Next</button>
  }
}

class Home extends React.Component {
  constructor() {
    super();
    this.settings = {
      slidesToShow: 2,
      speed: 500,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1500,
      pauseOnHover: true,
      draggable: true,
    };
  }
	render() {
    let container = {
      flex: '1 0 auto',
      color: '#333',
      background: '#419be0',
    }
    let card = {
      width: 'inherit',
    }



	return (
		<div style={s.homeContent}>
		<div style={s.leftContent}>
       <div style={s.carousel}>
         <Slider {...this.settings}>
          <div><img style={card} src="https://ih0.redbubble.net/image.207533190.1984/flat,1000x1000,075,f.u1.jpg" alt="fuck you"/></div>
          <div><img style={card} src="https://ih0.redbubble.net/image.207533190.1984/flat,1000x1000,075,f.u1.jpg" alt="fuck you"/></div>
          <div><img style={card} src="https://ih0.redbubble.net/image.207533190.1984/flat,1000x1000,075,f.u1.jpg" alt="fuck you"/></div>
          <div><img style={card} src="https://ih0.redbubble.net/image.207533190.1984/flat,1000x1000,075,f.u1.jpg" alt="fuck you"/></div>
          <div><img style={card} src="https://ih0.redbubble.net/image.207533190.1984/flat,1000x1000,075,f.u1.jpg" alt="fuck you"/></div>
          <div><img style={card} src="https://ih0.redbubble.net/image.207533190.1984/flat,1000x1000,075,f.u1.jpg" alt="fuck you"/></div>
          <div><img style={card} src="https://ih0.redbubble.net/image.207533190.1984/flat,1000x1000,075,f.u1.jpg" alt="fuck you"/></div>
          <div><img style={card} src="https://ih0.redbubble.net/image.207533190.1984/flat,1000x1000,075,f.u1.jpg" alt="fuck you"/></div>
          <div><img style={card} src="https://ih0.redbubble.net/image.207533190.1984/flat,1000x1000,075,f.u1.jpg" alt="fuck you"/></div>
          <div><img style={card} src="https://ih0.redbubble.net/image.207533190.1984/flat,1000x1000,075,f.u1.jpg" alt="fuck you"/></div>
          <div><img style={card} src="https://ih0.redbubble.net/image.207533190.1984/flat,1000x1000,075,f.u1.jpg" alt="fuck you"/></div>
          <div><img style={card} src="https://ih0.redbubble.net/image.207533190.1984/flat,1000x1000,075,f.u1.jpg" alt="fuck you"/></div>
          <div><img style={card} src="https://ih0.redbubble.net/image.207533190.1984/flat,1000x1000,075,f.u1.jpg" alt="fuck you"/></div>
          <div><img style={card} src="https://ih0.redbubble.net/image.207533190.1984/flat,1000x1000,075,f.u1.jpg" alt="fuck you"/></div>
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
