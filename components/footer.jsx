// import Images from "./images";
import Image from "next/image";

const Footer = () => {
	return (
		<div className="flex flex-col items-center justify-between h-auto px-0 py-10 mx-auto font-normal text-white bg-green-600 md:flex-row md:px-24 md:h-28">
			<div className="mb-5 md:mb-0">
				&copy;
				{new Date().getFullYear()} Arsya Group | All rights reserved
			</div>
			<div className="flex flex-row">
				<div className="mr-3">
					<Image src="/images/logo-catering.png" alt="Logo Catering" width={80} height={80} />
				</div>
				<div className="mr-3">
					<Image src="/images/logo-buah.png" alt="Logo Buah" width={80} height={80} />
				</div>
				<div className="mr-3">
					<Image src="/images/logo-wisata.png" alt="Logo Wisata" width={80} height={80} />
				</div>
				<div className="mr-0">
					<Image src="/images/logo-kafe.png" alt="Logo Kafe" width={80} height={80} />
				</div>
			</div>
		</div>
	);
};

export default Footer;
