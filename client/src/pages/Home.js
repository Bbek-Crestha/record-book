import { Outlet } from "react-router-dom";

import { Stack } from "@chakra-ui/react";

const Home = () => {
	return (
		<Stack direction="row">
			<Outlet />
		</Stack>
	);
};

export default Home;
