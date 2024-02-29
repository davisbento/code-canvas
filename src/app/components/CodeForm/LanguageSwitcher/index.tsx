'use client';

import useStyleState from '@/app/hooks/useStyleState';

import { languageOptions } from '@/app/utils/stylesOptions';

const LanguageSwitcher = () => {
	const { styleAtom, handlChangeLanguage, handleToggleAddLogo } = useStyleState();

	return (
		<div className='flex items-center gap-4'>
			<div className='p-1 rounded-md dark:bg-gray-200 bg-gray-700'>
				<div>
					<label className='sr-only' htmlFor='language'>
						Linguagem
					</label>
					<select
						name='language'
						id='language'
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
			</div>

			<div>
				<label className='sr-only' htmlFor='addLogo'>
					Adicionar logo
				</label>

				<div className='flex items-center space-x-2'>
					<input
						type='checkbox'
						id='addLogo'
						name='addLogo'
						className='rounded-md'
						checked={styleAtom.addLogo}
						onChange={() => handleToggleAddLogo()}
					/>
					<label htmlFor='addLogo' className='text-white'>
						Adicionar logo
					</label>
				</div>
			</div>
		</div>
	);
};

export default LanguageSwitcher;
