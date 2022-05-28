import { Stack, Spinner, Center } from "@chakra-ui/react";

const CustomSpinner = () => {
	return (
		<Center h="100vh" bgGradient="linear(to-b, green.200, red.200)">
			<Stack direction="row" spacing={4} align="center">
				<Spinner size="xs" />
				<Spinner size="sm" />
				<Spinner size="md" />
				<Spinner size="lg" />
				<Spinner size="xl" />
				<Spinner size="lg" />
				<Spinner size="md" />
				<Spinner size="sm" />
				<Spinner size="xs" />
			</Stack>
		</Center>
	);
};

export default CustomSpinner;
