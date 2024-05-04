'use client';

import useCodeState from '@/hooks/useCodeState';

const CodeDescription = () => {
	const { codeAtom, handleChangeDescription } = useCodeState();

	return (
		<div className='rounded-md border-2 border-white w-full'>
			<label className='sr-only' htmlFor='description'>
				Descrição
			</label>
			<input
				name='description'
				id='description'
				className='w-full p-2 text-md font-mono text-white focus:outline-none overflow-hidden bg-gray-800'
				type='text'
				placeholder='Descrição do código (opcional)'
				value={codeAtom?.description || ''}
				onChange={(e) => handleChangeDescription(e.target.value)}
			/>
		</div>
	);
};

export default CodeDescription;
