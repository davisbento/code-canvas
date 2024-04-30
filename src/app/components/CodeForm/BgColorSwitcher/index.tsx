'use client';

import useStyleState from '@/app/hooks/useStyleState';

import { useEffect, useRef, useState } from 'react';
import ColorTag from './ColorTag';

const generateColors = () => {
	const baseColors = ['blue', 'red', 'yellow', 'green', 'purple'];
	const baseWeights = ['50', '100', '500'];

	let colorOptions: string[] = [];

	for (const color of baseColors) {
		for (const weight of baseWeights) {
			colorOptions.push(`bg-${color}-${weight}`);
		}
	}

	return colorOptions;
};

const BgColorSwitcher = () => {
	const { handleChangeBgColor, styleAtom } = useStyleState();
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const btnRef = useRef<HTMLButtonElement>(null);

	const colorOptions = generateColors();

	const handleChange = (value: string) => {
		handleChangeBgColor(value);
	};

	const handleCloseOnOutsideClick = (e: MouseEvent) => {
		if (btnRef.current && !btnRef.current.contains(e.target as Node)) {
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
		<div className='relative w-12 h-12'>
			<button
				ref={btnRef}
				className='w-full h-full rounded-md'
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}
				type='button'
			>
				<ColorTag color={styleAtom?.bgColor} />
			</button>

			<div
				className={`absolute top-14 left-0 w-56 bg-gray-700 z-10 border-white border-2 p-2 rounded-md grid grid-cols-3 gap-2 ${
					isDropdownOpen ? 'block' : 'hidden'
				}`}
			>
				{colorOptions.map((color) => (
					<button
						key={color}
						className='w-12 h-12 rounded-md'
						onClick={() => {
							handleChange(color);
							setIsDropdownOpen(false);
						}}
						type='button'
					>
						<ColorTag color={color} />
					</button>
				))}
			</div>
		</div>
	);
};

export default BgColorSwitcher;
