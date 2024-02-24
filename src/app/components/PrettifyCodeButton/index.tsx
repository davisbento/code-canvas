'use client';

import useCodeState from '@/app/hooks/useCodeState';
import { formatCode } from '@/app/utils/formatCode';

const PrettifyCodeButton = () => {
	const { handleChangeCode, codeAtom } = useCodeState();

	const handleMakeCodePretty = async () => {
		const formattedCode = await formatCode(codeAtom.code);
		handleChangeCode(formattedCode);
	};

	return (
		<button className='p-4 border-yellow-100 bg-yellow-200 rounded-md' onClick={() => handleMakeCodePretty()}>
			<span className='text-yellow-700'>Formatar Código</span>
		</button>
	);
};

export default PrettifyCodeButton;
