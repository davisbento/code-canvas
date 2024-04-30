import * as prettier from 'prettier/standalone';
import parserBabel from 'prettier/plugins/babel';
import * as prettierPluginEstree from 'prettier/plugins/estree';

export const formatCode = (code: string) => {
	return prettier.format(code, {
		parser: 'babel',
		plugins: [parserBabel, prettierPluginEstree],
		semi: true,
		singleQuote: true
	});
};
