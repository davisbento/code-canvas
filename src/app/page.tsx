import CodeSnippet from './components/CodeSnippet';
import GenerateImageButton from './components/GenerateImageButton';
import PrettifyCodeButton from './components/PrettifyCodeButton';
import SyntaxHighlighterSnippet from './components/SyntaxHighlighterSnippet';
import ThemeSwitcher from './components/ThemeSwitcher';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center  w-full font-mono bg-slate-200 dark:bg-slate-800 '>
			<div className='flex items-end w-full p-4'>
				<ThemeSwitcher />
			</div>

			<div className='flex flex-col items-center gap-4 p-8'>
				<h1 className='text-6xl font-bold dark:text-white text-black'>CodeCanvas</h1>
				<p className='text-xl mb-8 dark:text-white text-black'>
					Bem-vindo ao CodeCanvas! Aqui você pode compartilhar trechos de código com outras pessoas!
				</p>
			</div>

			<div className='flex flex-col items-center justify-between gap-16 w-2/3'>
				<div className='flex flex-col items-center gap-4 p-4 w-full'>
					<CodeSnippet />

					<SyntaxHighlighterSnippet />
				</div>

				<hr className='w-full border-t-2 border-slate-300 dark:border-slate-700' />

				<div className='flex items-center gap-4'>
					<GenerateImageButton />

					<PrettifyCodeButton />
				</div>
			</div>
		</main>
	);
}
