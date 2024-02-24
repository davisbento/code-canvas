'use client';

import { generateImageFromHTML } from '@/app/utils/generateImage';

const GenerateImageButton = () => {
	const handleGenerateImage = async () => {
		const image = await generateImageFromHTML();
		console.log('image: ', image);
	};

	return (
		<button
			className='p-4 bg-slate-900 dark:bg-slate-200 dark:border-slate-200 border-slate-800 border-2 rounded-md'
			onClick={() => handleGenerateImage()}
		>
			<span className='text-white dark:text-black'>Exportar Imagem</span>
		</button>
	);
};

export default GenerateImageButton;
