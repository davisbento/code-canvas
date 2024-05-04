'use client';

import useCodeState from '@/hooks/useCodeState';

const CodeDescription = () => {
	const { codeAtom, handleChangeDescription } = useCodeState();

	return (
		<div>
			<label className='sr-only' htmlFor='description'>
				Descrição
			</label>

			<input
				name='description'
				id='description'
				className='w-full rounded-lg border-2 dark:border-white border-gray-900 p-2 text-md dark:text-white text-black focus:outline-none dark:bg-gray-800'
				type='text'
				placeholder='Descrição do código (opcional)'
				value={codeAtom?.description || ''}
				onChange={(e) => handleChangeDescription(e.target.value)}
			/>
		</div>
	);
};

export default CodeDescription;
