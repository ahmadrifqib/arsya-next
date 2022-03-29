import Image from "next/image";
import "animate.css";
import ReactFullpage from "@fullpage/react-fullpage";

const Home = () => {
	return (
		<ReactFullpage
			scrollingSpeed={1000}
			lockAnchors={true}
			navigation={true}
			navigationPosition={"left"}
			showActiveTooltip={true}
			slidesNavigation={true}
			slidesNavPosition={"bottom"}
			render={() => {
				return (
					<div className="">
						<ReactFullpage.Wrapper>
							<div className="font-bold text-center section bg-neutral-300">
								<span className="">
									<Image
										src="/images/arsya-logo.png"
										alt="Arsya Logo"
										width={400}
										height={400}
										layout="intrinsic"
									/>
								</span>
								<div className="text-5xl animate__animated animate__backInLeft">Selamat Datang.</div>
							</div>
							<div className="font-bold text-center section bg-emerald-900/40">
								<div>
									<Image
										src="/images/arsya-cafe.png"
										alt="Arsya Cafe Logo"
										width={340}
										height={420}
									/>
								</div>
								<div className=""></div>
							</div>
							<div className="font-bold text-center section bg-amber-200/80">
								<div>
									<Image
										src="/images/arsya-catering.png"
										alt="Catering Logo"
										width={340}
										height={420}
									/>
								</div>
								<div className=""></div>
							</div>
							<div className="font-bold text-center section bg-cyan-200/70">
								<div>
									<Image
										src="/images/arsya-buah.png"
										alt="Arsya Buah Logo"
										width={340}
										height={420}
									/>
								</div>
								<div className=""></div>
							</div>
							<div className="font-bold text-center section bg-rose-300/80">
								<div>
									<Image
										src="/images/arsya-wisata.png"
										alt="Arsya Wisata Logo"
										width={340}
										height={420}
									/>
								</div>
								<div className=""></div>
							</div>
							<div className="section">
								<div className="flex flex-col justify-between w-auto h-screen p-5 font-sans font-normal text-left text-gray-200 lg:p-10 bg-cyan-800/80">
									<div className="">
										<div className="px-5 md:px-10">
											<span className="h-auto">
												<Image
													src="/images/arsya-logo.png"
													alt="Arsya Logo"
													width={150}
													height={150}
													layout="intrinsic"
												/>
											</span>
											<div className="pt-1 text-lg font-light tracking-widest lg:pt-5 lg:text-3xl">
												CV ASRIYASA WYATA MANDIRI
											</div>
										</div>
										<div className="flex flex-col p-5 font-normal lg:font-medium font text-md lg:text-lg md:p-10 lg:flex-row">
											<div className="flex flex-col w-auto pb-10 md:w-2/3 lg:w-2/4 lg:pr-24">
												<div>
													Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
													totam accusantium. Repellat assumenda voluptatem velit qui unde
													debitis labore eaque modi provident molestias suscipit, cum quo,
													sapiente laborum, cupiditate maiores.
												</div>
											</div>
											<div className="md:w-2/3 lg:w-2/4">
												<div>
													Emerald Avenue Comercial Park Blok EA-A27 Jl. Boulevard CBD Bintaro,
													RT. 003 RW. 007, Perigi Pondok Aren, Kota Tangerang Selatan Banten
												</div>
												<div className="py-5 ">
													<tr className="">
														<td>Email</td>
														<td>:</td>
														<td>
															<a href="mailto:nicetime@arsya.co.id">
																nicetime@arsya.co.id
															</a>
														</td>
													</tr>
													<tr>
														<td>Telepon</td>
														<td>:</td>
														<td>
															<a href="tel:+622122210280">(021) 222 10 280</a>
														</td>
													</tr>
												</div>
											</div>
										</div>
									</div>
									<div className="text-sm text-center md:text-base">
										&copy;
										{new Date().getFullYear()} CV Asriyasa Wyata Mandiri | All rights reserved
									</div>
								</div>
							</div>
						</ReactFullpage.Wrapper>
					</div>
				);
			}}
		/>
	);
};

export default Home;
