import { atom } from 'recoil';
import { StyleOptionCss, styleOptions } from '../utils/stylesOptions';

type StyleState = {
	highliterStyle: keyof StyleOptionCss;
	language: string;
	addLogo: boolean;
	personalLogo: string | null;
};

export const styleState = atom<StyleState>({
	key: 'styleState',
	default: {
		highliterStyle: 'dracula',
		language: '',
		addLogo: false,
		personalLogo: null
	}
});
