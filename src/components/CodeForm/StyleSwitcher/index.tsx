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

	return (
		<div className='p-1 rounded-md dark:bg-gray-200 bg-gray-700 w-48'>
			<label className='sr-only' htmlFor='style'>
				Estilo
			</label>

			<select
				name='style'
				id='style'
				className='p-2 h-full w-full bg-gray-800 text-white'
				value={styleLocalState}
				onChange={(e) => handleChange(e.target.value)}
			>
				{Object.keys(styleOptions).map((style, index) => (
					<option key={index} value={style}>
						{transformStyleText(style)}
					</option>
				))}
			</select>
		</div>
	);
};

export default StyleSwitcher;
