import { useEffect, useState } from 'react';

const useTheme = () => {
	const [theme, setTheme] = useState<'light' | 'dark'>('dark');

	useEffect(() => {
		if (typeof localStorage === 'undefined') return;

		if (
			localStorage.getItem('theme') === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			setTheme('dark');
		} else {
			document.documentElement.classList.remove('dark');
			setTheme('light');
		}
	}, []);

	const handleChangeTheme = (theme: 'light' | 'dark') => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
			setTheme('dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
			setTheme('light');
		}
	};

	return { handleChangeTheme, theme };
};

export default useTheme;
