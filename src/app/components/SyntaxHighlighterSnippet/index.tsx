'use client';

import useCodeState from '@/app/hooks/useCodeState';
import useStyleState from '@/app/hooks/useStyleState';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import LanguageLogoFinder from '../LanguageLogoFinder';
import PersonalLogoFinder from '../PersonalLogoFinder';

const SyntaxHighlighterSnippet = () => {
	const { codeAtom } = useCodeState();
	const { styleAtom, getCurrentStyle } = useStyleState();

	return (
		<div id='image-to-generate' className='p-3 rounded-lg bg-yellow-50 lg:w-2/3 w-full '>
			{codeAtom.description && <p className='text-2xl text-[#3e2723] text-center'>{codeAtom.description}</p>}

			<div className='relative'>
				<LanguageLogoFinder />
				<PersonalLogoFinder />

				<SyntaxHighlighter showLineNumbers language={styleAtom.language} style={getCurrentStyle} wrapLines>
					{codeAtom.code || 'Hello World!'}
				</SyntaxHighlighter>
			</div>
		</div>
	);
};

export default SyntaxHighlighterSnippet;
