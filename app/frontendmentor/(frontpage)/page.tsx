import clsx from 'clsx';
import Link from 'next/link';

import {Container} from '@/components/personal/Container';

export default function FrontendmentorHome() {
	return (
		<Container as="main" spacingBottom="large" spacingTop="large">
			<h1 className={clsx('font-bold', 'mb-8', 'text-3xl')}>Frontendmentor solutions</h1>
			<ul>
				<li>
					<Link
						href="/frontendmentor/qr-code-component"
						className={clsx('underline', 'hover:no-underline', 'text-blue-600')}
					>
						QR code component
					</Link>
				</li>
			</ul>
		</Container>
	);
}
