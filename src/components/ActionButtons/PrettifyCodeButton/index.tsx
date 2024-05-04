'use client';

import useCodeState from '@/hooks/useCodeState';
import useStyleState from '@/hooks/useStyleState';
import { formatCode } from '@/utils/formatCode';

const allowedLanguages = ['javascript', 'typescript', 'jsx', 'tsx', 'css', 'scss', 'html', 'json'];

const PrettifyCodeButton = () => {
	const { handleChangeCode, codeAtom } = useCodeState();
	const { styleAtom } = useStyleState();

	const handleMakeCodePretty = async () => {
		const formattedCode = await formatCode(codeAtom.code);
		handleChangeCode(formattedCode);
	};

	return (
		<button
			disabled={!allowedLanguages.includes(styleAtom.language)}
			className='p-2 border-yellow-100 bg-yellow-200 h-12 rounded-md disabled:opacity-50'
			onClick={() => handleMakeCodePretty()}
		>
			<span className='text-black text-sm'>Prettify</span>
		</button>
	);
};

export default PrettifyCodeButton;
