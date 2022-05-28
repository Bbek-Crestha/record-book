import { Outlet } from "react-router-dom";
import { Stack } from "@chakra-ui/react";

import Navbar from "../components/Navbar";

const Home = () => {
	return (
		<Stack
			direction="row"
			bgGradient="linear(to-b, green.200, red.200)"
			h="100vh"
		>
			<Navbar />
			<Outlet />
		</Stack>
	);
};

export default Home;
