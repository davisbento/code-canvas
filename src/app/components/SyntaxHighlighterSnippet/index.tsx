'use client';

import useCodeState from '@/app/hooks/useCodeState';
import useStyleState from '@/app/hooks/useStyleState';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const SyntaxHighlighterSnippet = () => {
	const { codeAtom } = useCodeState();
	const { styleAtom } = useStyleState();

	return (
		<div id='image-to-generate' className='p-4 rounded-md bg-yellow-100 w-2/3'>
			{codeAtom.description && <p className='text-2xl text-yellow-700 text-center'>{codeAtom.description}</p>}

			<SyntaxHighlighter language={styleAtom.language} style={styleAtom.highliterStyle} wrapLines>
				{codeAtom.code || 'Hello World!'}
			</SyntaxHighlighter>
		</div>
	);
};

export default SyntaxHighlighterSnippet;
