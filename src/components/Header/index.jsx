import React from 'react';
import HireLink from '../common/HireLink';
import './header.scss';

function Header() {
	return (
		<header className="header" id="home">
			<div className="container header__container mb-12">
				<HireLink />
				<div className="header__content">
					<h1 className="heading">The digital marketing agency for higher ROI</h1>
					<p className="sub__heading mt-6">
						Find effective digital reach or your business, powered by human behaviour, driven by
						data.
					</p>
				</div>
			</div>
			<div className="container">
				<figure className="header__banner">
					<img className="header__banner-img" src="/images/banner.png" alt="Header banner" />
					<svg
						width="254"
						height="48"
						viewBox="0 0 254 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="zigzag"
					>
						<path
							d="M4.99493 23.901C21.2801 -0.0864714 37.5467 -0.0739454 53.7949 23.9386C70.0431 47.9511 86.3098 47.9636 102.595 23.9762C118.88 -0.0113151 135.147 0.00121092 151.395 24.0137C167.643 48.0263 183.91 48.0388 200.195 24.0513C216.48 0.0638412 232.747 0.0763672 248.995 24.0889"
							stroke="var(--color-primary)"
							strokeWidth="10"
						/>
					</svg>
					<span className="corner">&nbsp;</span>
					<span className="box box--1" data-scroll data-scroll-speed="2">
						&nbsp;
					</span>
					<span className="box box--2">&nbsp;</span>
				</figure>
			</div>
		</header>
	);
}

export default Header;
