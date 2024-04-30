import { getBgColorCookie } from '@/app/actions/cookies';
import BgColorSwitcher from '.';

// server side rendering wrapper
const BgColorSwitcherWrapper = () => {
	const color = getBgColorCookie();

	return <BgColorSwitcher colorFromCookie={color} />;
};

export default BgColorSwitcherWrapper;
