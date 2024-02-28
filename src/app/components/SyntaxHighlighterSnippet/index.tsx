'use client';

import useCodeState from '@/app/hooks/useCodeState';
import useStyleState from '@/app/hooks/useStyleState';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const SyntaxHighlighterSnippet = () => {
	const { codeAtom } = useCodeState();
	const { styleAtom } = useStyleState();

	return (
		<div id='image-to-generate' className={`p-4 rounded-lg bg-yellow-100 lg:w-2/3 w-full`}>
			{codeAtom.description && <p className='text-2xl text-yellow-700 text-center'>{codeAtom.description}</p>}

			<SyntaxHighlighter
				language={styleAtom.language}
				style={styleAtom.highliterStyle}
				wrapLines
				customStyle={{
					borderRadius: '0.5rem'
				}}
			>
				{codeAtom.code || 'Hello World!'}
			</SyntaxHighlighter>
		</div>
	);
};

export default SyntaxHighlighterSnippet;
