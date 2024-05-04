import { CSSProperties } from 'react';
import {
	a11yDark,
	atomDark,
	dracula,
	duotoneDark,
	gruvboxDark,
	gruvboxLight,
	materialDark,
	materialLight,
	nord,
	okaidia,
	oneDark,
	oneLight,
	solarizedlight,
	tomorrow
} from 'react-syntax-highlighter/dist/esm/styles/prism';

export type StyleOptionCss = Record<string, CSSProperties>;
type StyleOption = Record<string, StyleOptionCss>;

export const styleOptions: StyleOption = {
	okaida: okaidia,
	dracula: dracula,
	gruvboxDark: gruvboxDark,
	gruvboxLight: gruvboxLight,
	atomDark: atomDark,
	tomorrow: tomorrow,
	materialDark: materialDark,
	materialLight: materialLight,
	solarizedlight: solarizedlight,
	nord: nord,
	oneDark: oneDark,
	oneLight: oneLight,
	duotoneDark: duotoneDark,
	a11yDark: a11yDark
};

export const languageOptions = [
	'jsx',
	'javascript',
	'typescript',
	'python',
	'css',
	'html',
	'sql',
	'json',
	'markdown',
	'bash',
	'yaml',
	'go'
];
