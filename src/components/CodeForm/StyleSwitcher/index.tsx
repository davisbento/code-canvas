'use client';

import useStyleState from '@/hooks/useStyleState';

import { styleOptions } from '@/utils/stylesOptions';
import { useEffect, useState } from 'react';

const transformStyleText = (style: string) => {
	// break the camelCase and capitalize the first letter
	const words = style.split(/(?=[A-Z])/);
	const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
	return capitalizedWords.join(' ');
};

type Props = {
	styleFromCookies: string;
};

const StyleSwitcher = ({ styleFromCookies }: Props) => {
	const { styleAtom, handleChangeStyle } = useStyleState();

	// just to hold the initial value from the cookies
	const [styleLocalState, setStyleLocalState] = useState(styleFromCookies);

	const handleChange = (value: string) => {
		// update the local state and the cookie/global state
		setStyleLocalState(value);
		handleChangeStyle(value);
	};

	useEffect(() => {
		if (styleFromCookies) {
			handleChangeStyle(styleFromCookies);
		}
		// only run once to update
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const alphabeticallySortedStyles = Object.keys(styleOptions).sort((a, b) => a.localeCompare(b));

	return (
		<div>
			<label className='sr-only' htmlFor='style'>
				Estilo
			</label>

			<select
				name='style'
				id='style'
				className='rounded-lg border-2 dark:border-white border-black p-2 h-full w-full dark:bg-gray-800 dark:text-white text-black'
				value={styleLocalState}
				onChange={(e) => handleChange(e.target.value)}
			>
				{alphabeticallySortedStyles.map((style, index) => (
					<option key={index} value={style}>
						{transformStyleText(style)}
					</option>
				))}
			</select>
		</div>
	);
};

export default StyleSwitcher;
