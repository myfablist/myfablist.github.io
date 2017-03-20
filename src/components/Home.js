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
					<i style={s.carousel.body.arrowLeft} className="fa fa-arrow-left" aria-hidden="true"></i>
					<a href="/anime/anime#1" style={s.carousel.body.card}>
					</a>
					<a href="/anime/anime#2" style={s.carousel.body.card}>
					</a>
					<a href="/anime/anime#3" style={s.carousel.body.card}>
					</a>
					<a href="/anime/anime#4" style={s.carousel.body.card}>
					</a>
					<i style={s.carousel.body.arrowRight} className="fa fa-arrow-right" aria-hidden="true"></i>
				</div>
			</div>
			<div style={s.carousel}>
				<h1 style={s.carousel.heading}>Current Airing - TV SHOWS</h1>
				<div style={s.carousel.body}>
					<i style={s.carousel.body.arrowLeft} className="fa fa-arrow-left" aria-hidden="true"></i>
					<a href="/anime/anime#1" style={s.carousel.body.card}>
					</a>
					<a href="/anime/anime#2" style={s.carousel.body.card}>
					</a>
					<a href="/anime/anime#3" style={s.carousel.body.card}>
					</a>
					<a href="/anime/anime#4" style={s.carousel.body.card}>
					</a>
					<i style={s.carousel.body.arrowRight} className="fa fa-arrow-right" aria-hidden="true"></i>
				</div>
			</div>
			<div style={s.carousel}>
				<h1 style={s.carousel.heading}>Current Airing - MOVIES</h1>
				<div style={s.carousel.body}>
					<i style={s.carousel.body.arrowLeft} className="fa fa-arrow-left" aria-hidden="true"></i>
					<a href="/anime/anime#1" style={s.carousel.body.card}>
					</a>
					<a href="/anime/anime#2" style={s.carousel.body.card}>
					</a>
					<a href="/anime/anime#3" style={s.carousel.body.card}>
					</a>
					<a href="/anime/anime#4" style={s.carousel.body.card}>
					</a>
					<i style={s.carousel.body.arrowRight} className="fa fa-arrow-right" aria-hidden="true"></i>
				</div>
			</div>
			<div style={s.carousel}>
				<h1 style={s.carousel.heading}>Bestseller - BOOKS</h1>
				<div style={s.carousel.body}>
					<i style={s.carousel.body.arrowLeft} className="fa fa-arrow-left" aria-hidden="true"></i>
					<a href="/anime/anime#1" style={s.carousel.body.card}>
					</a>
					<a href="/anime/anime#2" style={s.carousel.body.card}>
					</a>
					<a href="/anime/anime#3" style={s.carousel.body.card}>
					</a>
					<a href="/anime/anime#4" style={s.carousel.body.card}>
					</a>
					<i style={s.carousel.body.arrowRight} className="fa fa-arrow-right" aria-hidden="true"></i>
				</div>
			</div>
		</div>
		<div style={s.rightContent}>
		</div>
		</div>
	);
	}
}

export default Home;
