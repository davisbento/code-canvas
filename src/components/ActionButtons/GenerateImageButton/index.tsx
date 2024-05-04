'use client';

import { generateImageFromHTML } from '@/utils/generateImage';
import { useState } from 'react';

const GenerateImageButton = () => {
	const [exporting, setExporting] = useState(false);

	const handleGenerateAndDownload = async () => {
		try {
			setExporting(true);
			const image = await generateImageFromHTML();

			const link = document.createElement('a');
			link.href = image;
			link.download = 'image.png';
			link.click();

			URL.revokeObjectURL(image);
		} catch (error) {
			console.error('Error generating image:', error);
		} finally {
			setExporting(false);
		}
	};

	return (
		<button
			disabled={exporting}
			className='p-2 h-12 bg-slate-900 dark:bg-slate-200 dark:border-slate-200 border-slate-800 rounded-lg disabled:opacity-50'
			onClick={() => handleGenerateAndDownload()}
		>
			<span className='text-white text-sm dark:text-black'>Exportar</span>
		</button>
	);
};

export default GenerateImageButton;
