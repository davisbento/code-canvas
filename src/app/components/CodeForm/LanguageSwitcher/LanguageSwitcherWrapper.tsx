import { getLanguageCookie } from '@/app/actions/cookies';
import LanguageSwitcher from './LanguageSwitcher';

// server side rendering wrapper
const LanguageSwitcherWrapper = () => {
	const language = getLanguageCookie();

	return <LanguageSwitcher language={language} />;
};

export default LanguageSwitcherWrapper;
