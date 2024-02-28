'use client';

import useStyleState from '@/app/hooks/useStyleState';

import { languageOptions } from '@/app/utils/stylesOptions';

const LanguageSwitcher = () => {
	const { styleAtom, handlChangeLanguage } = useStyleState();

	return (
		<div className='p-1 rounded-md dark:bg-gray-200 bg-gray-700 w-32'>
			<label className='sr-only' htmlFor='language'>
				Linguagem
			</label>
			<select
				name='language'
				className='p-2 w-full bg-gray-800 text-white'
				value={styleAtom.language}
				onChange={(e) => handlChangeLanguage(e.target.value as string)}
			>
				{languageOptions.map((lang, index) => (
					<option key={index} value={lang}>
						{lang}
					</option>
				))}
			</select>
		</div>
	);
};

export default LanguageSwitcher;
