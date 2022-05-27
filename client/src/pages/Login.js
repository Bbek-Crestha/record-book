import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
	Box,
	Center,
	Heading,
	Stack,
	Image,
	Button,
	Text,
} from "@chakra-ui/react";

import logoUrl from "../images/logo.png";
import InputField from "../components/InputField";
import { useState } from "react";

const Dashboard = () => {
	const { handleSubmit, control, formState } = useForm({
		mode: "onChange",
		defaultValues: {
			username: "",
			password: "",
		},
	});

	const navigate = useNavigate();
	const [message, setMessage] = useState("");

	const onSubmit = (data) => {
		if (data.username === "Bbek") {
			if (data.password === "123456") {
				navigate("/");
			} else {
				setMessage("Incorrect Password");
			}
		} else {
			setMessage("User not found");
		}
	};

	return (
		<Box bgGradient="linear(to-b, green.200, red.200)">
			<Center h="100vh">
				<Box p="4" w="350px" borderRadius="lg" bg="blackAlpha.200">
					<Stack spacing="4">
						<Stack align="center">
							<Image src={logoUrl} alt="logo" boxSize="60px" />
						</Stack>

						<Heading size="md" align="center">
							Sign in to continue
						</Heading>

						<form onSubmit={handleSubmit(onSubmit)}>
							<Text fontSize="sm" color="red" align="center">
								{message && message}
							</Text>
							<Stack spacing="4">
								<InputField
									name="Username"
									type="text"
									control={control}
									rules={{ required: "Username is required." }}
									message={formState.errors.username?.message}
								/>

								<InputField
									name="Password"
									type="password"
									control={control}
									rules={{ required: "Password is required." }}
									message={formState.errors.password?.message}
								/>

								<Button
									bg="primary.light"
									colorScheme="primary.dark"
									disabled={!formState.isValid}
									type="submit"
									size="md"
								>
									Submit
								</Button>
							</Stack>
						</form>
					</Stack>
				</Box>
			</Center>
		</Box>
	);
};

export default Dashboard;
