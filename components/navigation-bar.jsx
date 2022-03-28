import Image from "next/image";
import Link from "next/link";

// const myLoader = ({ src, width, quality }) => {
// 	return `https://arsya.co.id/${src}?w=${width}&q=${quality || 75}`;
// };

const NavigationBar = () => {
	return (
		<div className="flex items-center justify-between w-full h-20 text-black bg-white ">
			<div className="flex items-center justify-between h-full ">
				<div className="pl-4 pr-2 md:pl-10">
					<Image src="/images/logo.png" alt="Logo Arsya" width={72} height={72} />
				</div>
				<div className="p-5 ml-2 text-3xl font-medium md:mr-10">Arsya</div>
			</div>
			<Link href="/">
				<a className="hidden px-3 py-1 mx-20 text-2xl font-medium border-red-500 md:block hover:border-b-4 hover:text-green-600">
					Home
				</a>
			</Link>
		</div>
	);
};

export default NavigationBar;
