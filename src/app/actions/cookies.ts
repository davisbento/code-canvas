import { cookies } from 'next/headers';
import { THEME_COOKIE_KEY } from '../utils/cookies';
import { Theme } from '../utils/theme';

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
