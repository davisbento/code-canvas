'use client';

import { Theme } from '@/app/utils/theme';
import { RecoilRoot } from 'recoil';
import ThemeProvider from './ThemeProvider';
import { Analytics } from '@vercel/analytics/react';

const isProd = process.env.NODE_ENV === 'production';

type Props = {
	children: React.ReactNode;
	theme: Theme;
};

const Providers = ({ children, theme }: Props) => {
	return (
		<ThemeProvider theme={theme}>
			{isProd ? <Analytics /> : null}
			<RecoilRoot>{children}</RecoilRoot>
		</ThemeProvider>
	);
};

export default Providers;
