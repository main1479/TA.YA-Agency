import './haveCompleted.scss';

function HaveCompleted() {
	const completionData = [
		{
			count: '14+',
			description: 'Years of  working experience',
		},
		{
			count: '3k',
			description: 'Projects done all over the world',
		},
		{
			count: '1k+',
			description: 'Clients from all over the world',
		},
		{
			count: '20',
			description: 'Company trusted us for their succes.',
		},
	];
	return (
		<div className="haveCompleted">
			{completionData.map((item) => {
				return (
					<div className="haveCompleted__item" key={item.description + item.count}>
						<h2 className="heading haveCompleted__item-count">{item.count}</h2>
						<p className="p__text haveCompleted__item-description">{item.description}</p>
					</div>
				);
			})}
		</div>
	);
}

export default HaveCompleted;
