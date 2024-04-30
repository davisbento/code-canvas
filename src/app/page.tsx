import { PropsWithChildren } from 'react';
import GenerateImageButton from './components/ActionButtons/GenerateImageButton';
import PrettifyCodeButton from './components/ActionButtons/PrettifyCodeButton';
import BgColorSwitcher from './components/CodeForm/BgColorSwitcher';
import CodeDescription from './components/CodeForm/CodeDescription';
import CodeSnippet from './components/CodeForm/CodeSnippet';
import LanguageSwitcherWrapper from './components/CodeForm/LanguageSwitcher/LanguageSwitcherWrapper';
import StyleSwitcherWrapper from './components/CodeForm/StyleSwitcher/StyleSwitcherWrapper';
import SyntaxHighlighterSnippet from './components/SyntaxHighlighterSnippet';
import ThemeSwitcherButton from './components/ThemeSwitcherButton';

const Container = ({ children }: PropsWithChildren) => {
	return <div className='flex flex-col gap-8 md:w-3/4 w-full md:px-0 px-4 pb-8'>{children}</div>;
};

const Actions = ({ children }: PropsWithChildren) => {
	return <div className='flex md:flex-col flex-row items-center gap-4'>{children}</div>;
};

const CodeContainer = ({ children }: PropsWithChildren) => {
	return <div className='flex flex-col gap-4 w-full'>{children}</div>;
};

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center w-full font-mono bg-slate-200 dark:bg-slate-800 '>
			<div className='flex items-end w-full p-4'>
				<ThemeSwitcherButton />
			</div>

			<div className='flex flex-col items-center gap-4 md:pb-16 pb-8'>
				<h1 className='md:text-6xl text-5xl font-bold dark:text-white text-black'>CodeCanvas</h1>
				<p>Bem-vindo ao CodeCanvas! Aqui você pode gerar imagens de código com destaque de sintaxe</p>
			</div>

			<Container>
				<div className='flex md:flex-row flex-col items-center gap-4 w-full'>
					<CodeContainer>
						<div className='flex gap-4'>
							<StyleSwitcherWrapper />
							<BgColorSwitcher />
							<LanguageSwitcherWrapper />
						</div>

						<CodeDescription />

						{/* <div className='w-1/5'>
								<PersonalLogoUploader />
							</div> */}
						<CodeSnippet />
					</CodeContainer>

					<Actions>
						<GenerateImageButton />

						<PrettifyCodeButton />
					</Actions>
				</div>

				<div className='flex justify-center w-full'>
					<SyntaxHighlighterSnippet />
				</div>
			</Container>
		</main>
	);
}
