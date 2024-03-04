import { atom } from 'recoil';
import { styleOptions } from '../utils/stylesOptions';

export const styleState = atom({
	key: 'styleState',
	default: {
		highliterStyle: styleOptions.okaida,
		language: '',
		addLogo: false
	}
});
