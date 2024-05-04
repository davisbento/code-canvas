'use client';

import useCodeState from '@/hooks/useCodeState';

const CodeSnippet = ({}) => {
	const { handleChangeCode, codeAtom } = useCodeState();

	return (
		<div>
			<label className='sr-only' htmlFor='code'>
				Código
			</label>

			<textarea
				name='code'
				id='code'
				className='w-full h-60 rounded-lg border-2 dark:border-white border-gray-900 p-2 text-md dark:text-white text-black focus:outline-none dark:bg-gray-800'
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
			/>
		</div>
	);
};

export default CodeSnippet;
