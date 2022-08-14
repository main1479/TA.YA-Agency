import React, { useEffect } from 'react';
import './Navbar.scss';

function getStoredTheme() {
	const stortedTheme = localStorage.getItem('theme');
	if (stortedTheme) {
		return stortedTheme;
	}

	return 'dark';
}

function Navbar() {
	useEffect(() => {
		document.body.classList.remove('light');
		document.body.classList.remove('dark');
		document.body.classList.add(getStoredTheme());
	}, []);

	const handleTheme = () => {
		if (document.body.classList.contains('light')) {
			document.body.classList.remove('light');
			document.body.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.body.classList.remove('dark');
			document.body.classList.add('light');
			localStorage.setItem('theme', 'light');
		}
	};

	const handleMobileNav = () => {
		document.body.classList.toggle('nav-active');
	};

	return (
		<nav className="nav" id="home">
			<div className="container nav__container">
				<a href="#home" className="logo">
					<svg
						width="104"
						height="30"
						viewBox="0 0 104 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M42.39 5.8V8.66H47.538V24H50.528V8.66H55.65V5.8H42.39ZM65.6391 12.846C64.5731 11.39 63.0651 10.662 61.0891 10.662C59.2951 10.662 57.7871 11.312 56.5131 12.638C55.2391 13.964 54.6151 15.576 54.6151 17.5C54.6151 19.398 55.2391 21.036 56.5131 22.362C57.7871 23.688 59.2951 24.338 61.0891 24.338C63.0651 24.338 64.5731 23.61 65.6391 22.128V24H68.4471V11H65.6391V12.846ZM58.5931 20.49C57.8131 19.684 57.4231 18.696 57.4231 17.5C57.4231 16.304 57.8131 15.316 58.5931 14.536C59.3731 13.73 60.3611 13.34 61.5311 13.34C62.7011 13.34 63.6891 13.73 64.4691 14.536C65.2491 15.316 65.6391 16.304 65.6391 17.5C65.6391 18.696 65.2491 19.684 64.4691 20.49C63.6891 21.27 62.7011 21.66 61.5311 21.66C60.3611 21.66 59.3731 21.27 58.5931 20.49ZM73.41 20.412C72.292 20.412 71.46 21.296 71.46 22.362C71.46 23.428 72.344 24.312 73.41 24.312C74.476 24.312 75.36 23.428 75.36 22.362C75.36 21.296 74.476 20.412 73.41 20.412ZM85.9879 5.8L81.5679 13.86L77.1219 5.8H73.7159L80.0599 16.772V24H83.0499V16.772L89.3939 5.8H85.9879ZM98.8754 12.846C97.8094 11.39 96.3014 10.662 94.3254 10.662C92.5314 10.662 91.0234 11.312 89.7494 12.638C88.4754 13.964 87.8514 15.576 87.8514 17.5C87.8514 19.398 88.4754 21.036 89.7494 22.362C91.0234 23.688 92.5314 24.338 94.3254 24.338C96.3014 24.338 97.8094 23.61 98.8754 22.128V24H101.683V11H98.8754V12.846ZM91.8294 20.49C91.0494 19.684 90.6594 18.696 90.6594 17.5C90.6594 16.304 91.0494 15.316 91.8294 14.536C92.6094 13.73 93.5974 13.34 94.7674 13.34C95.9374 13.34 96.9254 13.73 97.7054 14.536C98.4854 15.316 98.8754 16.304 98.8754 17.5C98.8754 18.696 98.4854 19.684 97.7054 20.49C96.9254 21.27 95.9374 21.66 94.7674 21.66C93.5974 21.66 92.6094 21.27 91.8294 20.49Z"
							fill="currentColor"
						/>
						<path
							d="M15 0L15.4118 2.50022C16.2371 7.51065 16.6498 10.0159 18.317 11.683C19.9841 13.3502 22.4894 13.7629 27.4998 14.5882L30 15L27.4998 15.4118C22.4894 16.2371 19.9841 16.6498 18.317 18.317C16.6498 19.9841 16.2371 22.4894 15.4118 27.4998L15 30L14.5882 27.4998C13.7629 22.4894 13.3502 19.9841 11.683 18.317C10.0159 16.6498 7.51065 16.2371 2.50022 15.4118L0 15L2.50022 14.5882C7.51065 13.7629 10.0159 13.3502 11.683 11.683C13.3502 10.0159 13.7629 7.51065 14.5882 2.50022L15 0Z"
							fill="#F5A3DA"
						/>
					</svg>
				</a>

				{/* Navigation Menu */}
				<ul className="nav__links">
					<li>
						<a href="#home">HOME</a>
					</li>
					<li>
						<a href="#services">SERVICES</a>
					</li>
					<li>
						<a href="#blog">BLOG</a>
					</li>
					<li>
						<a href="#contact">CONTACT</a>
					</li>
				</ul>
				{/* Theme Toggle Button */}
				<button className="toggleButton" onClick={handleTheme}>
					<div className="toggleButton__text toggleButton__text--light">LIGHT</div>
					<div className="toggleButton__text toggleButton__text--dark">DARK</div>
					<span className="switch">
						<span className="circle"></span>
					</span>
				</button>
				<button className="menu__toggle" onClick={handleMobileNav}>
					<span className="menu__toggle-text menu__toggle-text--open">MENU</span>
					<span className="menu__toggle-text menu__toggle-text--close">CLOSE</span>
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
