import useStyleState from '@/app/hooks/useStyleState';
import { FaJs, FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const LanguageLogoFinder = () => {
	const {
		styleAtom: { language, addLogo }
	} = useStyleState();

	if (!addLogo) return null;

	const getLogo = () => {
		if (language === 'javascript') {
			return <FaJs size={28} color='#F0DB4F' />;
		}

		if (language === 'typescript') {
			return <SiTypescript size={24} color='#007acc' />;
		}

		if (language === 'jsx') {
			return <FaReact size={32} color='#61DBFB' />;
		}

		return null;
	};

	return <div className='absolute top-4 right-6'>{getLogo()}</div>;
};

export default LanguageLogoFinder;
