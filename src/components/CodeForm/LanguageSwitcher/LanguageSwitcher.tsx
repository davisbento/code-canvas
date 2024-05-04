'use client';

import useStyleState from '@/hooks/useStyleState';

import { languageOptions } from '@/utils/stylesOptions';
import { useEffect, useState } from 'react';

type Props = {
	languageFromCookies: string;
};

const LanguageSwitcher = ({ languageFromCookies }: Props) => {
	const { styleAtom, handleChangeLanguage, handleToggleAddLogo } = useStyleState();

	// just to hold the initial value from the cookies
	const [langLocalState, setLangLocalState] = useState(languageFromCookies);

	const handleChange = (value: string) => {
		// update the local state and the cookie/global state
		setLangLocalState(value);
		handleChangeLanguage(value);
	};

	useEffect(() => {
		if (languageFromCookies) {
			handleChangeLanguage(languageFromCookies);
		}
		// only run once to update
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='flex items-center gap-4'>
			<div>
				<label className='sr-only' htmlFor='language'>
					Linguagem
				</label>

				<select
					name='language'
					id='language'
					className='h-full rounded-lg border-2 dark:border-white  border-black p-2 w-full dark:bg-gray-800 dark:text-white text-black'
					value={langLocalState}
					onChange={(e) => handleChange(e.target.value as string)}
				>
					{languageOptions
						.sort((a, b) => a.localeCompare(b))
						.map((lang, index) => (
							<option key={index} value={lang}>
								{lang}
							</option>
						))}
				</select>
			</div>

			<div className='flex items-center space-x-2'>
				<input
					type='checkbox'
					id='addLogo'
					name='addLogo'
					className='rounded-lg'
					checked={styleAtom.addLogo}
					onChange={() => handleToggleAddLogo()}
				/>
				<label htmlFor='addLogo' className='text-white'>
					<span className='md:hidden'>Logo</span>
					<span className='hidden md:inline'>Adicionar logo</span>
				</label>
			</div>
		</div>
	);
};

export default LanguageSwitcher;
