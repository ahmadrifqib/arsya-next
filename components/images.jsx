import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
	return `https://arsya.co.id/${src}?w=${width}&q=${quality || 75}`;
};

const Images = ({ src, alt, width, height }) => {
	return <Image loader={myLoader} src={src} alt={alt} width={width} height={height} />;
};

export default Images;
