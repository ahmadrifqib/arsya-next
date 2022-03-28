import Image from "next/image";

const Footer = () => {
	return (
		<div className="flex flex-col items-center justify-between w-auto h-screen p-5 mx-auto font-sans font-normal text-left text-gray-200 lg:p-10 bg-cyan-800/90">
			<div className="flex flex-col p-5 md:p-10 lg:flex-row">
				<div className="flex flex-col lg:w-2/4 space-y-3.5">
					<div>
						<Image src="/images/logo-fixed.png" alt="Arsya Logo" width={150} height={150} />
					</div>
					<div className="text-lg font-light tracking-widest lg:text-3xl">CV ASRIYASA WYATA MANDIRI</div>
					<div>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, totam accusantium. Repellat
						assumenda voluptatem velit qui unde debitis labore eaque modi provident molestias suscipit, cum
						quo, sapiente laborum, cupiditate maiores.
					</div>
				</div>
				<div className="flex-col hidden lg:flex lg:w-2/4">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.5174083970517!2d106.68790782917938!3d-6.2545565997170245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb22e589b24b%3A0x349389e45327d1fa!2sArsya%20Buah!5e0!3m2!1sid!2sid!4v1648459320262!5m2!1sid!2sid"
						width="600"
						height="450"
						className="rounded-xl"
						allowFullScreen=""
						loading="lazy"
					/>
				</div>
			</div>
			<div className="mb-5 text-sm md:text-base md:mb-0">
				&copy;
				{new Date().getFullYear()} CV Asriyasa Wyata Mandiri | All rights reserved
			</div>
		</div>
	);
};

export default Footer;
