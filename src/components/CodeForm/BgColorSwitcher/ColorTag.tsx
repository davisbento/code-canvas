type Props = {
	color: string;
	onClick: (color: string) => void;
};

const ColorTag = ({ color, onClick }: Props) => {
	return <div className={`w-12 h-12 cursor-pointer rounded-md ${color}`} onClick={() => onClick(color)} />;
};

export default ColorTag;
