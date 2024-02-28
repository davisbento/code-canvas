'use client';

import { Moon, Sun } from 'lucide-react';

import useTheme from '@/app/hooks/useTheme';

const ThemeSwitcherButton = () => {
	const { theme, toggleTheme } = useTheme();
	const isDarkTheme = theme === 'dark';

	return (
		<div className='flex items-center gap-4'>
			<button onClick={toggleTheme}>{isDarkTheme ? <Moon color='#f5f5f5' size={36} /> : <Sun size={36} />}</button>
		</div>
	);
};

export default ThemeSwitcherButton;
