'use client';

import useCodeState from '@/app/hooks/useCodeState';

const CodeSnippet = ({}) => {
	const { handleChangeCode, codeAtom } = useCodeState();

	return (
		<div className='p-2 rounded-md dark:bg-gray-200 bg-gray-700 w-full'>
			<label className='sr-only' htmlFor='code'>
				Código
			</label>
			<textarea
				name='code'
				placeholder='Digite seu código aqui...'
				value={codeAtom.code}
				onChange={(e) => handleChangeCode(e.target.value)}
				className='w-full h-64 p-4 text-lg text-white focus:outline-none overflow-hidden bg-gray-800'
			/>
		</div>
	);
};

export default CodeSnippet;
