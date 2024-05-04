'use client';

import useStyleState from '@/hooks/useStyleState';

import { useEffect, useRef, useState } from 'react';
import ColorTag from './ColorTag';

const BgColorSwitcher = () => {
	const { handleChangeBgColor, styleAtom } = useStyleState();
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const divRef = useRef<HTMLDivElement>(null);

	const colorVariants = {
		//yellow
		'bg-yellow-50': 'bg-yellow-50',
		'bg-yellow-200': 'bg-yellow-200',
		'bg-yellow-600': 'bg-yellow-600',
		//red
		'bg-red-100': 'bg-red-100',
		'bg-red-300': 'bg-red-300',
		'bg-red-600': 'bg-red-600',
		// //green
		'bg-green-100': 'bg-green-100',
		'bg-green-300': 'bg-green-300',
		'bg-green-600': 'bg-green-600',
		// blue
		'bg-blue-100': 'bg-blue-100',
		'bg-blue-200': 'bg-blue-200',
		'bg-blue-600': 'bg-blue-600',
		// // purple
		'bg-purple-100': 'bg-purple-100',
		'bg-purple-300': 'bg-purple-300',
		'bg-purple-600': 'bg-purple-600'
	};

	const handleChange = (value: string) => {
		handleChangeBgColor(value);
	};

	const handleCloseOnOutsideClick = (e: MouseEvent) => {
		if (divRef.current && !divRef.current.contains(e.target as Node)) {
			setIsDropdownOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleCloseOnOutsideClick);

		return () => {
			document.removeEventListener('click', handleCloseOnOutsideClick);
		};
	}, []);

	return (
		<div className='relative'>
			<div ref={divRef}>
				<ColorTag onClick={() => setIsDropdownOpen(!isDropdownOpen)} color={styleAtom?.bgColor} />
			</div>

			{isDropdownOpen && (
				<div className='absolute top-14 left-0 z-10 dark:bg-gray-800 bg-gray-300 dark:border-white border-black border-2 p-2 rounded-lg'>
					<div className='grid grid-cols-3 gap-2 min-w-40'>
						{Object.keys(colorVariants).map((color) => (
							<ColorTag key={color} color={color} onClick={() => handleChange(color)} />
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default BgColorSwitcher;
