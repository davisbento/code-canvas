export const THEME_COOKIE_KEY = 'theme-preference';
export const LANGUAGE_COOKIE_KEY = 'language-preference';
export const STYLE_COOKIE_KEY = 'style-preference';

export const getCookie = (name: string) => {
	const match = document?.cookie.match(`;\\s*${name}=([^;]+)`);

	return match ? match[1] : null;
};

export const setCookie = (name: string, value: string, days: number) => {
	let expires = '';

	if (days) {
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = `; expires=${date.toUTCString()}`;
	}

	document.cookie = `${name}=${value}${expires}; path=/`;
};

export const deleteCookie = (name: string) => {
	setCookie(name, '', -1);
};

export const setLanguagePreference = (language: string) => {
	deleteCookie(LANGUAGE_COOKIE_KEY);
	setCookie(LANGUAGE_COOKIE_KEY, language, 365);
};

export const setStylePreference = (style: string) => {
	deleteCookie(STYLE_COOKIE_KEY);
	setCookie(STYLE_COOKIE_KEY, style, 365);
};
