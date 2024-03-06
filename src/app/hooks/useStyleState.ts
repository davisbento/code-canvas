import { useRecoilState } from 'recoil';
import { styleState } from '../states/style';
import { setLanguagePreference } from '../utils/cookies';
import { StyleOptionCss } from '../utils/stylesOptions';
import { useCallback } from 'react';

const useStyleState = () => {
	const [styleAtom, setStyleAtom] = useRecoilState(styleState);

	const handleChangeStyle = (style: StyleOptionCss) => {
		setStyleAtom({
			...styleAtom,
			highliterStyle: style
		});
	};

	const handleChangeLanguage = useCallback(
		(language: string) => {
			setLanguagePreference(language);

			setStyleAtom({
				...styleAtom,
				language
			});
		},
		[styleAtom, setStyleAtom]
	);

	const handleToggleAddLogo = () => {
		setStyleAtom({
			...styleAtom,
			addLogo: !styleAtom.addLogo
		});
	};

	const handleChangePersonalLogo = (personalLogo: string) => {
		setStyleAtom({
			...styleAtom,
			personalLogo
		});
	};

	return {
		styleAtom,
		handleChangeStyle,
		handleChangeLanguage,
		handleToggleAddLogo,
		handleChangePersonalLogo
	};
};

export default useStyleState;
