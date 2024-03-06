import { atom } from 'recoil';
import { StyleOptionCss, styleOptions } from '../utils/stylesOptions';

type StyleState = {
	highliterStyle: StyleOptionCss;
	language: string;
	addLogo: boolean;
	personalLogo: string | null;
};

export const styleState = atom<StyleState>({
	key: 'styleState',
	default: {
		highliterStyle: styleOptions.okaida,
		language: '',
		addLogo: false,
		personalLogo: null
	}
});
