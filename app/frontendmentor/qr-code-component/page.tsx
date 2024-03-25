import Image from 'next/image';

import QRimage from './images/image-qr-code.png';

export default function FrontendmentorHome() {
	return (
		<main>
			<section>
				<Image src={QRimage} alt="QR code" />
				<h1>Improve your front-end skills by building projects</h1>
				<p>
					Scan the QR code to visit Frontend Mentor and take your coding skills to the
					next level
				</p>
			</section>
		</main>
	);
}
