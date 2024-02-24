'use client';

import useCodeState from '@/app/hooks/useCodeState';
import useStyleState from '@/app/hooks/useStyleState';
import { formatCode } from '@/app/utils/formatCode';

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
			className='p-4 border-yellow-100 bg-yellow-200 rounded-md disabled:opacity-50'
			onClick={() => handleMakeCodePretty()}
		>
			<span className='text-yellow-700'>Prettify</span>
		</button>
	);
};

export default PrettifyCodeButton;
