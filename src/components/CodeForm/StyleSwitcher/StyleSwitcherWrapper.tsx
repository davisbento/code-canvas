import { getStyleCookie } from '@/app/actions/cookies';
import StyleSwitcher from '.';

// server side rendering wrapper
const StyleSwitcherWrapper = () => {
	const style = getStyleCookie();

	return <StyleSwitcher styleFromCookies={style} />;
};

export default StyleSwitcherWrapper;
