import { getLanguageCookie } from '@/app/actions/cookies';
import LanguageSwitcher from './LanguageSwitcher';

// server side rendering wrapper
const LanguageSwitcherWrapper = () => {
	const language = getLanguageCookie();

	return <LanguageSwitcher languageFromCookies={language} />;
};

export default LanguageSwitcherWrapper;
