'use client';

import useCodeState from '@/app/hooks/useCodeState';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SyntaxHighlighterSnippet = () => {
	const { codeAtom } = useCodeState();

	return (
		<div id='image-to-generate' className='p-4 rounded-md bg-yellow-100'>
			{codeAtom.description && <p className='text-xs text-yellow-700'>{codeAtom.description}</p>}
			<SyntaxHighlighter language='jsx' style={okaidia} wrapLines>
				{codeAtom.code || 'Hello World!'}
			</SyntaxHighlighter>
		</div>
	);
};

export default SyntaxHighlighterSnippet;
