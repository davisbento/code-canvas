'use client';

import { Theme } from '@/app/utils/theme';
import { RecoilRoot } from 'recoil';
import ThemeProvider from './ThemeProvider';

type Props = {
	children: React.ReactNode;
	theme: Theme;
};

const Providers = ({ children, theme }: Props) => {
	return (
		<ThemeProvider theme={theme}>
			<RecoilRoot>{children}</RecoilRoot>
		</ThemeProvider>
	);
};

export default Providers;
