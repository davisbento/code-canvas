'use client';

import useCodeState from '@/app/hooks/useCodeState';

const CodeDescription = () => {
	const { codeAtom, handleChangeDescription } = useCodeState();

	return (
		<div className='p-2 rounded-md dark:bg-gray-200 bg-gray-700 w-full'>
			<label className='sr-only' htmlFor='description'>
				Descrição
			</label>
			<input
				name='description'
				id='description'
				className='w-full p-4 text-lg font-mono text-white focus:outline-none overflow-hidden bg-gray-800'
				type='text'
				placeholder='Descrição do código (opcional)'
				value={codeAtom?.description || ''}
				onChange={(e) => handleChangeDescription(e.target.value)}
			/>
		</div>
	);
};

export default CodeDescription;
