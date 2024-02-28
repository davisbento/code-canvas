import { useContext } from 'react';
import ThemeContext from '../states/theme';

export default function useTheme() {
	return useContext(ThemeContext);
}
