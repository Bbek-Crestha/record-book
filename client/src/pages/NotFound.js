import { Link } from "react-router-dom";
import image from "../images/notFound.png";

import { Button, Center, Heading, Image, Stack, Text } from "@chakra-ui/react";

const NotFound = () => {
	return (
		<Center h="100vh">
			<Stack align="center" spacing="0">
				<Image src={image} alt="not found logo" w="350px" />

				<Heading as="h3" size="md" textAlign="center">
					Page Not Found
				</Heading>

				<Text fontSize="md" p={4} align="center">
					Sorry, we couldn't find the page you are looking for. Please go back
					to home page.
				</Text>

				<Link to="/">
					<Button bg="primary" colorScheme="primary" size="md">
						Go To Homepage
					</Button>
				</Link>
			</Stack>
		</Center>
	);
};

export default NotFound;
