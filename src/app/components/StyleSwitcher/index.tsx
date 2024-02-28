'use client';

import useStyleState from '@/app/hooks/useStyleState';

import { styleOptions } from '@/app/utils/stylesOptions';

const StyleSwitcher = () => {
	const { styleAtom, handleChangeStyle } = useStyleState();

	return (
		<div className='p-1 rounded-md dark:bg-gray-200 bg-gray-700 w-48'>
			<select
				className='p-2 w-full bg-gray-800 text-white'
				value={Object.keys(styleOptions).find((style) => styleOptions[style] === styleAtom.highliterStyle)}
				onChange={(e) => handleChangeStyle(styleOptions[e.target.value])}
			>
				{Object.keys(styleOptions).map((style, index) => (
					<option key={index} value={style}>
						{style}
					</option>
				))}
			</select>
		</div>
	);
};

export default StyleSwitcher;
