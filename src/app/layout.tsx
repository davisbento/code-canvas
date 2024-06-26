import Providers from '@/components/Providers';
import { Theme } from '@/utils/theme';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { getThemeCookie } from './actions/cookies';
import './globals.css';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
	title: 'CodeCanvas',
	description: 'Compartilhe trechos de código com outras pessoas!'
};

export default function RootLayout({ children }: PropsWithChildren) {
	const theme = getThemeCookie();

	return (
		<html lang='en' className={theme} style={{ colorScheme: theme }}>
			<body className={roboto.className}>
				<Providers theme={theme as Theme}>{children}</Providers>
			</body>
		</html>
	);
}
