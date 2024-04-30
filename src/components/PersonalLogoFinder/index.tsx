import useStyleState from '@/hooks/useStyleState';
import Image from 'next/image';

const PersonalLogoFinder = () => {
	const {
		styleAtom: { personalLogo }
	} = useStyleState();

	if (!personalLogo) return null;

	return (
		<div className='absolute top-1 right-1/4'>
			<Image className='rounded-full border-2' src={personalLogo} alt='Personal Logo' width={46} height={46} />
		</div>
	);
};

export default PersonalLogoFinder;
