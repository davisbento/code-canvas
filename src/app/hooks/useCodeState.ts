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

	return {
		codeAtom,
		handleChangeCode
	};
};

export default useCodeState;
