import { CSSProperties } from 'react';
import {
	okaidia,
	dracula,
	gruvboxDark,
	gruvboxLight,
	atomDark,
	tomorrow,
	materialDark,
	materialLight
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
	materialLight: materialLight
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
