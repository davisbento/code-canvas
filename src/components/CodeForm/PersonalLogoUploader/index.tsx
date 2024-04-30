'use client';

import useStyleState from '@/hooks/useStyleState';
import { ChangeEvent } from 'react';
import { MdUploadFile } from 'react-icons/md';

const PersonalLogoUploader = () => {
	const { handleChangePersonalLogo } = useStyleState();

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			// Perform validation for PNG and JPG file types
			const allowedTypes = ['image/png', 'image/jpeg'];
			if (allowedTypes.includes(file.type)) {
				// Handle the file upload logic here
				const preview = URL.createObjectURL(file);
				handleChangePersonalLogo(preview);
			} else {
				console.log('Invalid file type. Please upload a PNG or JPG image.');
			}
		}
	};

	return (
		<div className='flex items-center justify-center gap-2'>
			<label htmlFor='logo-upload' className='flex flex-col items-center gap-2 cursor-pointer'>
				<input
					type='file'
					id='logo-upload'
					accept='.png, .jpg, .jpeg'
					onChange={handleFileChange}
					style={{ display: 'none' }}
				/>
				<span>Upload Logo</span>
				<MdUploadFile size={24} />
			</label>
		</div>
	);
};

export default PersonalLogoUploader;
