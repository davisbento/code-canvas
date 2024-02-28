export const THEME_COOKIE_KEY = 'theme-preference';

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
