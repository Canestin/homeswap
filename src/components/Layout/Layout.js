import React from "react";
import Footer from "./footer";
import useLocalStorage from "../hooks/useLocalStorage";
import { useLocation } from "@reach/router";
import Navigation from "./navigation/navigation";
import { TrustPilotBox } from "gatsby-plugin-trustpilot-trustbox";

const Layout = ({ children, withFooter, ...props }) => {
	const location = useLocation();

	return (
		<>
			<Navigation />

			<main className={`Main`}>{children}</main>

			<Footer />
		</>
	);
};

export default Layout;
