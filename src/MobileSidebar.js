import React from "react";
import Sidebar from "react-sidebar";
import { LinksMobile } from "./NavLinks";
import { Box, Heading, Button } from "grommet";
import { Menu } from "grommet-icons";

function MobileSidebar(props) {
	const [mobileSidebarOpen, setMobileSidebar] = React.useState(false);

	function MobileNavbar(props) {
		return (
			<Box
				align="center"
				justify="start"
				direction="row"
				overflow="auto"
				pad={{ left: "small" }}
				margin={{ bottom: "large" }}
				wrap={false}
				background={{ dark: true, color: "brand" }}
				elevation="small"
				className="navbar"
			>
				<Button
					icon={<Menu />}
					onClick={() => {
						setMobileSidebar(true);
					}}
				/>
				<Heading level="1">Next Act</Heading>
			</Box>
		);
	}

	return (
		<Sidebar
			sidebar={<LinksMobile />}
			open={mobileSidebarOpen}
			onSetOpen={() => {
				setMobileSidebar(!mobileSidebarOpen);
			}}
			styles={{
				sidebar: {
					// Grommet brand color.
					background: "#ba1600"
				}
			}}
		>
			<MobileNavbar />
			{props.children}
		</Sidebar>
	);
}

export default MobileSidebar;
