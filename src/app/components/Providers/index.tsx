'use client';

import { RecoilRoot } from 'recoil';

type Props = {
	children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
	return <RecoilRoot>{children}</RecoilRoot>;
};

export default Providers;