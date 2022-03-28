import Image from "next/image";
import "animate.css";
import ReactFullpage from "@fullpage/react-fullpage";

import Footer from "../components/Footer";

const Home = () => {
	return (
		<ReactFullpage
			//fullpage options
			scrollingSpeed={1000}
			lockAnchors={true}
			navigation={true}
			navigationPosition={"left"}
			showActiveTooltip={true}
			slidesNavigation={true}
			slidesNavPosition={"bottom"}
			/* Options here */
			render={() => {
				return (
					<div className="">
						<ReactFullpage.Wrapper>
							<div className="font-bold text-center section">
								<div className="py-10">
									<Image
										className=""
										src="/images/logo-fixed.png"
										alt="Arsya Logo"
										width={420}
										height={420}
									/>
								</div>
								<div className="text-5xl animate__animated animate__backInLeft">Selamat Datang.</div>
							</div>
							<div className="font-bold text-center section">
								<div>
									<Image
										src="/images/logo-kafe-fixed.png"
										alt="Arsya Cafe Logo"
										width={340}
										height={420}
									/>
								</div>
								<div className=""></div>
							</div>
							<div className="font-bold text-center section">
								<div>
									<Image
										src="/images/logo-catering-fixed.png"
										alt="Catering Logo"
										width={340}
										height={420}
									/>
								</div>
								<div className=""></div>
							</div>
							<div className="font-bold text-center section">
								<div>
									<Image
										src="/images/logo-buah-fixed.png"
										alt="Arsya Buah Logo"
										width={340}
										height={420}
									/>
								</div>
								<div className=""></div>
							</div>
							<div className="font-bold text-center section">
								<div>
									<Image
										src="/images/logo-wisata-fixed.png"
										alt="Arsya Wisata Logo"
										width={340}
										height={420}
									/>
								</div>
								<div className=""></div>
							</div>
							<div className="section">
								<Footer />
							</div>
						</ReactFullpage.Wrapper>
					</div>
				);
			}}
		/>
	);
};

export default Home;
