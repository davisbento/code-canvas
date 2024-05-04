'use client';

import useCodeState from '@/hooks/useCodeState';
import useStyleState from '@/hooks/useStyleState';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import LanguageLogoFinder from '../LanguageLogoFinder';
import PersonalLogoFinder from '../PersonalLogoFinder';

const SyntaxHighlighterSnippet = () => {
	const { codeAtom } = useCodeState();
	const { styleAtom, getCurrentStyle } = useStyleState();

	const bgColor = styleAtom.bgColor;

	return (
		<div id='image-to-generate' className={`p-8 rounded-lg ${bgColor} w-full`}>
			{codeAtom.description && <p className='text-xl text-[#3e2723] text-center'>{codeAtom.description}</p>}

			<div className='relative text-sm'>
				<LanguageLogoFinder />
				<PersonalLogoFinder />

				<SyntaxHighlighter
					showLineNumbers
					language={styleAtom.language}
					style={getCurrentStyle}
					wrapLines
					wrapLongLines
				>
					{codeAtom.code || 'Hello World!'}
				</SyntaxHighlighter>
			</div>
		</div>
	);
};

export default SyntaxHighlighterSnippet;
