import clsx from 'clsx';
import Link from 'next/link';

import {Container} from './Container';
import {Logo} from './Logo';

const HOME_STRING = 'Home';

export const Navbar = () => {
	return (
		<Container
			as="header"
			className={clsx('border-b', 'border-solid', 'border-black/20', 'relative', 'z-50')}
		>
			<div className={clsx('flex', 'h-20', 'items-center', 'justify-between')}>
				<Link href="/">
					<span className="sr-only">{HOME_STRING}</span>
					<Logo height={40} aria-hidden="true" />
				</Link>

				<nav>
					<ul>
						<li>
							<Link href="/frontendmentor">Frontendmentor</Link>
						</li>
					</ul>
				</nav>
			</div>
		</Container>
	);
};
