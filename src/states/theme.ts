import { createContext } from 'react';
import { Theme } from '../utils/theme';

type ThemeContextProps = {
	theme: Theme | undefined;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextProps>({
	theme: undefined,
	toggleTheme: () => {}
});

export default ThemeContext;
