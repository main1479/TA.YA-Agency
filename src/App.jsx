import Navbar from './components/common/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import WorkFlow from './components/Workflow';
import useLocoScroll from './hooks/useLocoScroll';

function App() {
	useLocoScroll(true);
	return (
		<>
			<div id="main-container">
				<Navbar />
				<div className="dark-bg">&nbsp;</div>
				<Header />
				<Services />
				<WorkFlow />
				<Testimonial />
			</div>
		</>
	);
}

export default App;
