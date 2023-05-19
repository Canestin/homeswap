import React from "react";
import Footer from "./footer";
import Header from "../Header/Header";

const Layout = ({ children, withNavbar, withFooter }) => {
	return (
		<>
			{withNavbar && <Header />}

			<main className={`Main`}>{children}</main>

			{withFooter && <Footer />}
		</>
	);
};

export default Layout;
