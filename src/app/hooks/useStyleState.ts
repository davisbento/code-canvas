import { CSSProperties } from 'react';
import { useRecoilState } from 'recoil';
import { styleState } from '../states/style';
import { StyleOptionCss } from '../utils/stylesOptions';

const useStyleState = () => {
	const [styleAtom, setStyleAtom] = useRecoilState(styleState);

	const handleChangeStyle = (style: StyleOptionCss) => {
		setStyleAtom({
			...styleAtom,
			highliterStyle: style
		});
	};

	const handlChangeLanguage = (language: string) => {
		setStyleAtom({
			...styleAtom,
			language
		});
	};

	return {
		styleAtom,
		handleChangeStyle,
		handlChangeLanguage
	};
};

export default useStyleState;
