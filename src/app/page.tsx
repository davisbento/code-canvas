import GenerateImageButton from '@/components/ActionButtons/GenerateImageButton';
import PrettifyCodeButton from '@/components/ActionButtons/PrettifyCodeButton';
import BgColorSwitcher from '@/components/CodeForm/BgColorSwitcher';
import CodeDescription from '@/components/CodeForm/CodeDescription';
import CodeSnippet from '@/components/CodeForm/CodeSnippet';
import LanguageSwitcherWrapper from '@/components/CodeForm/LanguageSwitcher/LanguageSwitcherWrapper';
import StyleSwitcherWrapper from '@/components/CodeForm/StyleSwitcher/StyleSwitcherWrapper';
import SyntaxHighlighterSnippet from '@/components/SyntaxHighlighterSnippet';
import ThemeSwitcherButton from '@/components/ThemeSwitcherButton';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center w-full font-mono bg-slate-200 dark:bg-slate-800'>
			<div className='flex items-end w-full p-4'>
				<ThemeSwitcherButton />
			</div>

			<div className='flex flex-col items-center gap-4'>
				<h1 className='md:text-5xl text-4xl font-bold dark:text-white text-black'>CodeCanvas</h1>

				<p className='md:text-lg text-md text-center dark:text-white text-black w-full'>
					Bem-vindo ao CodeCanvas! Aqui você pode gerar imagens de código com destaque de sintaxe
				</p>
			</div>

			<div className='flex flex-col gap-4 w-full mt-16 p-8'>
				<div className='flex gap-4'>
					<StyleSwitcherWrapper />
					<BgColorSwitcher />
					<LanguageSwitcherWrapper />
				</div>

				<div className='flex flex-col lg:flex-row gap-4'>
					<div className='flex flex-col gap-4 lg:w-2/4 w-full'>
						<CodeDescription />

						<CodeSnippet />

						<div className='flex gap-4'>
							<GenerateImageButton />

							<PrettifyCodeButton />
						</div>
					</div>

					<div className='flex flex-col items-center lg:w-2/4 w-full'>
						<SyntaxHighlighterSnippet />
					</div>
				</div>
			</div>
		</main>
	);
}
