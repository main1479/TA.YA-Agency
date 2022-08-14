import React from 'react';
import HireLink from '../common/HireLink';
import './header.scss';

function Header() {
	return (
		<header className="header">
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
					<img src="/images/banner.png" alt="Header banner" />
				</figure>
			</div>
		</header>
	);
}

export default Header;
