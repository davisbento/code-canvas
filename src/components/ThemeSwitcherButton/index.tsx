'use client';

import useTheme from '@/hooks/useTheme';
import { BiMoon, BiSun } from 'react-icons/bi';

const ThemeSwitcherButton = () => {
	const { theme, toggleTheme } = useTheme();
	const isDarkTheme = theme === 'dark';

	return (
		<div className='flex items-center gap-4'>
			<button aria-label='Toggle theme' onClick={toggleTheme}>
				{isDarkTheme ? <BiMoon color='#f5f5f5' size={36} /> : <BiSun size={36} />}
			</button>
		</div>
	);
};

export default ThemeSwitcherButton;
