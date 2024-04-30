import { cookies } from 'next/headers';
import { BG_COLOR_COOKIE_KEY, LANGUAGE_COOKIE_KEY, STYLE_COOKIE_KEY, THEME_COOKIE_KEY } from '../../utils/cookies';
import { Theme } from '../../utils/theme';

/**
 * Get the theme preference from the cookie store.
 ** This will run on the server before the HTML is sent to the client.
 ** And then it will prevent the theme from flickering when the client-side JavaScript runs.
 * @returns The theme preference.
 */
export const getThemeCookie = () => {
	const cookieStore = cookies();
	const themePreference = cookieStore.get(THEME_COOKIE_KEY)?.value || 'dark';
	const theme = themePreference === 'dark' ? 'dark' : 'light';

	return theme as Theme;
};

export const getLanguageCookie = () => {
	const cookieStore = cookies();
	const language = cookieStore.get(LANGUAGE_COOKIE_KEY)?.value || 'jsx';

	return language;
};

export const getStyleCookie = () => {
	const cookieStore = cookies();
	const style = cookieStore.get(STYLE_COOKIE_KEY)?.value || 'dracula';

	return style;
};

export const getBgColorCookie = () => {
	const cookieStore = cookies();
	const style = cookieStore.get(BG_COLOR_COOKIE_KEY)?.value || 'bg-yellow-50';

	return style;
};
