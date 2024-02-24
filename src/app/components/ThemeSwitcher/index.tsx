'use client';

import useTheme from '@/app/hooks/useTheme';

const ThemeSwitcher = () => {
	const { theme, handleChangeTheme } = useTheme();
	const isDarkTheme = theme === 'dark';

	const toggleTheme = () => {
		handleChangeTheme(isDarkTheme ? 'light' : 'dark');
	};

	return (
		<div className='flex items-center gap-4'>
			<button
				className={`p-2 rounded-full ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-yellow-400 text-gray-800'}`}
				onClick={toggleTheme}
			>
				{isDarkTheme ? (
					<svg fill='#fff' width='35px' height='35px' viewBox='0 0 30 30'>
						<g>
							<path
								d='M29.693,14.49c-0.469-0.174-1-0.035-1.32,0.353c-1.795,2.189-4.443,3.446-7.27,3.446c-5.183,0-9.396-4.216-9.396-9.397
							c0-2.608,1.051-5.036,2.963-6.835c0.366-0.347,0.471-0.885,0.264-1.343c-0.207-0.456-0.682-0.736-1.184-0.684
							C5.91,0.791,0,7.311,0,15.194c0,8.402,6.836,15.238,15.238,15.238c8.303,0,14.989-6.506,15.219-14.812
							C30.471,15.118,30.164,14.664,29.693,14.49z'
							/>
						</g>
					</svg>
				) : (
					<svg width='30px' height='30px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z'
							stroke='#fff'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				)}
			</button>
		</div>
	);
};

export default ThemeSwitcher;
