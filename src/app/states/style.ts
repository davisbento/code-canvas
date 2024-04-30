import { atom } from 'recoil';
import { StyleOptionCss } from '../utils/stylesOptions';

type StyleState = {
	highliterStyle: keyof StyleOptionCss;
	bgColor: string;
	language: string;
	addLogo: boolean;
	personalLogo: string | null;
};

export const styleState = atom<StyleState>({
	key: 'styleState',
	default: {
		highliterStyle: 'dracula',
		language: '',
		bgColor: 'bg-yellow-50',
		addLogo: false,
		personalLogo: null
	}
});
