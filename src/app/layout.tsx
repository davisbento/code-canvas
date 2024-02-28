import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Providers from './components/Providers';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
	title: 'CodeCanvas',
	description: 'Compartilhe trechos de código com outras pessoas!'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={roboto.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
