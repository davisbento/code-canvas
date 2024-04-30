import { useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { styleState } from '../states/style';
import { setBgColorPreference, setLanguagePreference, setStylePreference } from '../utils/cookies';
import { styleOptions } from '../utils/stylesOptions';

const useStyleState = () => {
	const [styleAtom, setStyleAtom] = useRecoilState(styleState);

	const handleChangeStyle = (style: string) => {
		setStylePreference(style);

		setStyleAtom({
			...styleAtom,
			highliterStyle: style
		});
	};

	const handleChangeBgColor = (bgColor: string) => {
		setBgColorPreference(bgColor);

		setStyleAtom({
			...styleAtom,
			bgColor
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

	const getCurrentStyle = useMemo(() => {
		return styleOptions[styleAtom.highliterStyle];
	}, [styleAtom.highliterStyle]);

	return {
		styleAtom,
		handleChangeStyle,
		handleChangeBgColor,
		handleChangeLanguage,
		handleToggleAddLogo,
		handleChangePersonalLogo,
		getCurrentStyle
	};
};

export default useStyleState;
