// import Footer from "./footer";
import HeadComponent from "./head-component";
import NavigationBar from "./navigation-bar";

const Layout = ({ children }) => {
	return (
		<>
			<HeadComponent />
			<div className="h-screen m-auto font-sans antialiased bg-center bg-no-repeat bg-cover bg-food ">
				<div className="absolute z-10 w-full bg-white">
					<NavigationBar />
				</div>

				<div className="absolute z-0 w-full h-screen text-center py-72 bg-gray-500/60">{children}</div>
				{/* <Footer /> */}
			</div>
		</>
	);
};

export default Layout;
