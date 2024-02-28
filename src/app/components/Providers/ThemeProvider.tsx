'use client';

import ThemeContext from '@/app/states/theme';
import { THEME_COOKIE_KEY } from '@/app/utils/cookies';
import { Theme, getColors, getPreference, setPreference } from '@/app/utils/theme';
import React, { useCallback, useState } from 'react';

const color = getColors();

type ThemeProviderProps = {
	theme: Theme;
	children: React.ReactNode;
};

export default function ThemeProvider({ children, theme: startTheme }: ThemeProviderProps) {
	const [theme, setTheme] = useState(startTheme ?? getPreference(THEME_COOKIE_KEY));

	const toggleTheme = useCallback(() => {
		setTheme(theme === color.dark ? color.light : color.dark);
		setPreference(THEME_COOKIE_KEY, theme === color.dark ? 'light' : 'dark');
	}, [theme, setTheme]);

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
