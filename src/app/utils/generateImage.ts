import html2canvas from 'html2canvas';

export const generateImageFromHTML = async () => {
	const containerToGenerate = document.getElementById('image-to-generate');

	if (!containerToGenerate) {
		throw new Error('Container not found');
	}

	const canvas = await html2canvas(containerToGenerate, {
		width: containerToGenerate.clientWidth,
		height: containerToGenerate.clientHeight
	});

	const image = canvas.toDataURL('image/png');
	return image;
};
