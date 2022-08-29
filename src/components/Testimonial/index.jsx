import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';

import './testimonial.scss';

export default function Testimonial() {
	const testimonialData = [
		{
			text: 'Our ecommerce platform. They contribute enormously to our growth with an excellent return on.',
			clientName: 'Tanim Khan',
			clientRole: 'CEO of Tanims',
			id: '01',
		},
		{
			text: 'From web services production, the Momentumm team has always gone beyond our expectations.',
			clientName: 'Yeasin Arfat',
			clientRole: 'PM at WeDevs',
			id: '02',
		},
		{
			text: 'Excellent agency! they keep their promises and focus on customer needs. They provided turnkey service for our website',
			clientName: 'Maruf Mia',
			clientRole: 'CEO of Malpo',
			id: '03',
		},
		{
			text: 'My experience with this Agency is excellent. We started by mandating them on 2 web project.',
			clientName: 'JT Niloy',
			clientRole: 'Tech Lead at TDEVS',
			id: '04',
		},
		{
			text: 'It was a fantastic experience and everything was so smooth, I enjoyed working with them.',
			clientName: 'Mainul Islam',
			clientRole: 'Freelance Frontend Dev',
			id: '05',
		},
	];
	return (
		<section className="testimonial" id="testimonial">
			<div className="container">
				<div className="testimonial__top">
					<h2 className="heading ch-13">client’s kind words</h2>
					<p className="sub__heading ch-60">
						Find effective digital reach or your business, powered by human behaviour, driven by
						data.
					</p>
				</div>

				<Swiper
					slidesPerView={1}
					spaceBetween={20}
					loop={true}
					navigation={{
						prevEl: '.prev',
						nextEl: '.next',
					}}
					modules={[Navigation]}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
					}}
					className="testimonial__slides"
				>
					{testimonialData.map((testimonial) => (
						<SwiperSlide key={testimonial.id}>
							<TestimonialItem testimonial={testimonial} />
						</SwiperSlide>
					))}
					<button className="prev">
						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M17 17L1 17M1 17L1 0.999998M1 17L17 1"
								stroke="currentColor"
								strokeWidth="2"
							/>
						</svg>
					</button>
					<button className="next">
						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M1 1H17M17 1V17M17 1L1 17" stroke="currentColor" strokeWidth="2" />
						</svg>
					</button>
				</Swiper>
			</div>
		</section>
	);
}

function TestimonialItem({ testimonial }) {
	return (
		<div className="testimonial__slides-item">
			<div className="testimonial__slides-item__icon">“</div>
			<div className="testimonial__slides-item__content">
				<p className="testimonial__slides-item__text">{testimonial.text}</p>
				<h4 className="heading testimonial__slides-item__client">{testimonial.clientName}</h4>
				<p className="p__text">{testimonial.clientRole}</p>
			</div>
		</div>
	);
}
