import type {Metadata} from 'next';
import {Outfit} from 'next/font/google';

import './styles.css';

const outfit = Outfit({subsets: ['latin']});

export const metadata: Metadata = {
	title: 'Frontend Mentor | QR code component',
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={outfit.className}>{children}</body>
		</html>
	);
}
