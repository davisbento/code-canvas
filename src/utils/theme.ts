import { deleteCookie, getCookie, setCookie } from './cookies';

const THEME_DARK = 'dark';
const THEME_LIGHT = 'light';

export type Theme = typeof THEME_DARK | typeof THEME_LIGHT;

const applyPreference = (theme: Theme) => {
	const root = document.firstElementChild as HTMLElement;

	if (!root) return;

	root.classList.remove(THEME_LIGHT, THEME_DARK);
	root.classList.add(theme);
	root.style.colorScheme = theme;
};

export const getPreference = (storageKey: string) => {
	const cookie = getCookie(storageKey);

	if (cookie) {
		return cookie;
	}

	return window.matchMedia(`(prefers-color-scheme: ${THEME_DARK})`).matches ? THEME_DARK : THEME_LIGHT;
};

export const setPreference = (storageKey: string, theme: Theme) => {
	deleteCookie(storageKey);
	setCookie(storageKey, theme, 365);
	applyPreference(theme);
};

export const getColors = () => ({ dark: THEME_DARK, light: THEME_LIGHT }) as const;
