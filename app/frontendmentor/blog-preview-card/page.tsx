import Image from 'next/image';

import CardImage from './assets/images/illustration-article.svg';

export default function Home() {
	return (
		<main>
			<section className="card">
				<div className="image-container">
					<Image
						className="card-image"
						fill
						style={{objectFit: 'cover'}}
						src={CardImage}
						alt=""
					/>
				</div>
				<div className="card-content">
					<strong className="label">Learning</strong>
					<small>
						Published <time dateTime="2023-12-21">21 Dec 2023</time>
					</small>
					<h1 className="card-title">HTML & CSS foundations</h1>
					<p>
						These languages are the backbone of every website, defining structure,
						content, and presentation.
					</p>
				</div>
				<strong>Greg Hooper</strong>
			</section>
		</main>
	);
}
