import { useState } from 'react';
import HaveCompleted from '../HaveCompleted';
import './workflow.scss';
function WorkFlow() {
	const workflowData = [
		{
			title: 'concept',
			text: 'During our initial consultation, our project managers determine your target customers, marketing goals, needs and demands. In this stage, we set your expectations, answer your queries',
			indexID: '1',
		},
		{
			title: 'budget',
			text: 'In this stage we explain the different stages of your custom website design creation and provide initial custom web design pricing. Doing so ensures we are on the right track.',
			indexID: '2',
		},
		{
			title: 'development',
			text: 'This phase covers site development, content optimization and on-site SEO. We ensure all elements of your website, such as your logo design, color scheme and interactive site elements, reflect your branding. Once we’ve completed the front-end and back-end development, we meet with you again for a final site review and revision, if there’s any.',
			indexID: '3',
		},
		{
			title: 'result',
			text: 'Finally, we transfer your website from a local server to the live server. To ensure you have a clear grasp of your site needs, we also provide client training where we teach you how to manage the back-end of your website. Our custom website design company offers on-going site maintenance and SEO so you can focus on your internal processes.',
			indexID: '4',
		},
	];

	const [currentFlow, setCurrentFlow] = useState(workflowData[0]);

	const handleCurrentFlow = (id) => {
		const newCurrentFlow = workflowData.find((flow) => flow.indexID === id);
		setCurrentFlow(newCurrentFlow);
	};

	return (
		<section className="workflow" id="blog">
			<div className="container">
				<div className="workflow__top">
					<h2 className="heading workflow__title">our customized work flow</h2>
					<p className="sub__heading mt-6">
						Find effective digital reach or your business, powered by human behaviour, driven by
						data.
					</p>
				</div>
			</div>
			<div className="workflow__middle" id="flow">
				{workflowData.map((flow, index) => {
					return (
						<div
							className={
								flow.indexID === currentFlow.indexID
									? 'workflow__flow flow-active'
									: 'workflow__flow'
							}
							key={flow.indexID + flow.title}
							onMouseEnter={() => handleCurrentFlow(flow.indexID)}
						>
							<div className="container">
								<div
									className="workflow__flow-title"
									data-scroll
									data-scroll-direction="horizontal"
									data-scroll-target="#flow"
									data-scroll-speed={-index}
								>
									<span>0{flow.indexID}.</span>
									<h2 className="heading">{flow.title}</h2>
								</div>
							</div>
						</div>
					);
				})}
				<div className="container">
					{window.innerWidth > 768 && <CurrentWorkFlow flow={currentFlow} />}
					{window.innerWidth <= 768 && (
						<div className="workflow__grid">
							{workflowData.map((flow) => (
								<CurrentWorkFlow key={flow.indexID} flow={flow} />
							))}
						</div>
					)}
				</div>

				<div className="container">
					<HaveCompleted />
				</div>
			</div>
		</section>
	);
}

function CurrentWorkFlow({ flow }) {
	return (
		<div className="workflow__current">
			<h4 className="workflow__current-count heading">
				0{flow.indexID}.
				<svg
					width="68"
					height="74"
					viewBox="0 0 68 74"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="hightlight"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M22.4259 68.5278C16.0259 66.7318 9.32534 65.8258 2.82534 64.9958C1.42534 64.8218 0.125535 65.7928 0.0255346 67.1608C-0.174465 68.5298 0.826121 69.7818 2.12612 69.9557C8.42612 70.7548 14.9255 71.6097 21.0255 73.3387C22.3255 73.7137 23.7261 72.9418 24.1261 71.6138C24.5261 70.2868 23.7259 68.9038 22.4259 68.5278Z"
						fill="currentColor"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M41.8251 43.0648C31.5251 32.5538 19.9251 23.3958 9.8251 12.6028C8.9251 11.5948 7.3251 11.5408 6.3251 12.4818C5.3251 13.4238 5.22549 15.0078 6.22549 16.0158C16.3255 26.8398 27.9255 36.0278 38.2255 46.5698C39.2255 47.5538 40.8251 47.5678 41.8251 46.5998C42.7251 45.6328 42.8251 44.0488 41.8251 43.0648Z"
						fill="currentColor"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M61.1264 2.63576C61.4264 8.65176 61.7259 14.6678 62.0259 20.6848C62.0259 22.0628 63.2264 23.1268 64.6264 23.0598C66.0264 22.9918 67.0259 21.8188 67.0259 20.4398C66.7259 14.4138 66.4264 8.38876 66.1264 2.36376C66.0264 0.985757 64.8262 -0.0712432 63.4262 0.00375683C62.1262 0.0787568 61.0264 1.25876 61.1264 2.63576Z"
						fill="currentColor"
					/>
				</svg>
			</h4>
			<div className="workflow__current-content">
				<h4 className="workflow__current-title heading">{flow.title}</h4>
				<p className="p__text">{flow.text}</p>
			</div>
		</div>
	);
}

export default WorkFlow;
