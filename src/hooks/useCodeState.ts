import { useRecoilState } from 'recoil';
import { codeState } from '../states/code';

const useCodeState = () => {
	const [codeAtom, setCodeAtom] = useRecoilState(codeState);

	const handleChangeCode = (code: string) => {
		setCodeAtom({
			...codeAtom,
			code
		});
	};

	const handleChangeDescription = (description: string) => {
		setCodeAtom({
			...codeAtom,
			description
		});
	};

	return {
		codeAtom,
		handleChangeCode,
		handleChangeDescription
	};
};

export default useCodeState;
