'use client';

import useCodeState from '@/app/hooks/useCodeState';

const CodeSnippet = ({}) => {
	const { handleChangeCode, codeAtom } = useCodeState();

	return (
		<div className='p-1 rounded-md dark:bg-gray-200 bg-gray-700 w-full'>
			<label className='sr-only' htmlFor='code'>
				Código
			</label>
			<textarea
				name='code'
				id='code'
				placeholder='Digite seu código aqui...'
				value={codeAtom.code}
				onChange={(e) => handleChangeCode(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Tab') {
						e.preventDefault();
						const start = e.currentTarget.selectionStart;
						const end = e.currentTarget.selectionEnd;

						// set textarea value to: text before caret + tab + text after caret
						e.currentTarget.value =
							e.currentTarget.value.substring(0, start) + '\t' + e.currentTarget.value.substring(end);

						// put caret at right position again
						e.currentTarget.selectionStart = e.currentTarget.selectionEnd = start + 1;
					}
				}}
				className='w-full h-64 p-4 text-lg text-white focus:outline-none bg-gray-800'
			/>
		</div>
	);
};

export default CodeSnippet;
