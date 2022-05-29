import { Outlet } from "react-router-dom";
import { Box, Stack } from "@chakra-ui/react";

import Navbar from "../components/Navbar";

const Home = () => {
	return (
		<Stack
			direction="row"
			spacing="0"
			bgGradient="linear(to-b, green.200, red.200)"
			h="100vh"
		>
			<Navbar />

			<Box p="2">
				<Outlet />
			</Box>
		</Stack>
	);
};

export default Home;
