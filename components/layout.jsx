// import Footer from "./footer";
import HeadComponent from "./head-component";
// import NavigationBar from "./navigation-bar";

const Layout = ({ children }) => {
	return (
		<>
			<HeadComponent />
			{/* <div className="absolute z-10 w-full bg-white">
					<NavigationBar />
				</div> */}

			<div className="h-screen antialiased bg-gray-400">{children}</div>
			{/* <Footer /> */}
		</>
	);
};

export default Layout;
