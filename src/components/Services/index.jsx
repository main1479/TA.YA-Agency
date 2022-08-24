import './services.scss';
function Services() {
	const servicesItems = [
		{
			text: 'Search Engine Optimization (SEO)',
			link: 'https://www.linkedin.com/in/main1479/',
		},
		{
			text: 'Social Media Marketing',
			link: 'https://www.linkedin.com/in/main1479/',
		},
		{
			text: 'Integrated Online Marketing Strategies',
			link: 'https://www.linkedin.com/in/main1479/',
		},
		{
			text: 'Quality Link Building',
			link: 'https://www.linkedin.com/in/main1479/',
		},
	];

	return (
		<section className="services" id="services">
			<div className="container">
				<div className="services__top">
					<div className="services__content">
						<h2 className="heading services__title">we offer best services for our customer</h2>
						<p className="sub__heading mt-6 mb-2">
							Find effective digital reach or your business, powered by human behaviour, driven by
							data.
						</p>
						<svg
							width="120"
							height="159"
							viewBox="0 0 120 159"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="services__zigzag"
						>
							<path
								d="M44.1409 96.3274L43.5749 93.3813L44.1409 96.3274ZM96.9908 157.403C98.2256 158.508 100.122 158.402 101.227 157.167L119.23 137.046C120.335 135.811 120.23 133.914 118.995 132.81C117.76 131.705 115.864 131.81 114.759 133.045L98.7558 150.931L80.8699 134.928C79.6352 133.823 77.7386 133.929 76.6338 135.163C75.529 136.398 75.6344 138.295 76.8692 139.399L96.9908 157.403ZM0.113954 6.41012C33.4324 5.91209 58.7902 25.4793 68.3952 46.2966C73.1949 56.6992 73.9394 67.1099 70.2346 75.4485C66.5752 83.6849 58.2792 90.5562 43.5749 93.3813L44.7069 99.2735C60.8313 96.1756 71.0716 88.3419 75.7178 77.8846C80.3185 67.5295 79.1378 55.2578 73.8433 43.7828C63.2599 20.8451 35.753 -0.123266 0.0242794 0.410791L0.113954 6.41012ZM43.5749 93.3813C33.2644 95.3622 26.7712 94.9168 23.0717 93.4607C21.2784 92.7549 20.248 91.8559 19.6658 90.9751C19.0882 90.1013 18.8042 89.0232 18.8819 87.6897C19.0445 84.8992 20.8038 81.2268 24.1959 77.5397C27.529 73.9169 32.176 70.5779 37.514 68.4031C48.0891 64.0945 61.153 64.3902 72.317 75.8858C83.7233 87.6307 93.558 111.459 95.9958 155.333L101.987 155.001C99.5218 110.641 89.5467 85.0148 76.6213 71.7057C63.4537 58.147 47.6643 57.7888 35.2501 62.8466C29.0934 65.355 23.7118 69.2042 19.7804 73.4774C15.9081 77.6862 13.1672 82.6174 12.892 87.3406C12.7508 89.7639 13.2635 92.1702 14.6605 94.2837C16.0529 96.3902 18.1749 97.9813 20.8742 99.0438C26.16 101.124 34.0127 101.328 44.7069 99.2735L43.5749 93.3813Z"
								fill="currentColor"
							/>
						</svg>
					</div>
					<div className="services__images">
						<figure className="services__images-img">
							<img src="/images/we-offer.png" alt="Services We Offer" />
							<span className="corner">&nbsp;</span>
						</figure>
						<div className="services__images-line">&nbsp;</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="services__items">
					{servicesItems.map((item, index) => {
						return (
							<div className="services__item" key={item.text + index}>
								<h4 className="heading services__item-count">
									<span data-scroll data-scroll-speed="-0.3" data-scroll-direction="horizontal">
										0{index + 1}.
									</span>
								</h4>
								<p className="heading services__item-text">{item.text}</p>
								<a href={item.link} className="services__item-link">
									Explore
									<svg
										width="46"
										height="46"
										viewBox="0 0 46 46"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="23" cy="23" r="23" fill="var(--color-primary)" />
										<path
											d="M15 15H31M31 15V31M31 15L15 31"
											stroke="var(--color-revert-text)"
											strokeWidth="2"
										/>
									</svg>
								</a>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Services;
