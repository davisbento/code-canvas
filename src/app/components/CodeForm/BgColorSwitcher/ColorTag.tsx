type Props = {
	color: string;
};

const ColorTag = ({ color }: Props) => {
	return <div className={`w-full h-full rounded-lg ${color}`}></div>;
};

export default ColorTag;
