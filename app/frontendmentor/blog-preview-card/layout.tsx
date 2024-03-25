import type {Metadata} from 'next';
import {Figtree} from 'next/font/google';

import './styles.css';

const figtree = Figtree({subsets: ['latin']});

export const metadata: Metadata = {
	title: 'Frontend Mentor | Blog preview card',
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={figtree.className}>{children}</body>
		</html>
	);
}
