import { useState } from "react";
import axios from "axios";
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
import { FaKey, FaUser } from "react-icons/fa";

import logoUrl from "../images/logo.png";
import InputField from "../components/InputField";

const Dashboard = () => {
	const { handleSubmit, control, formState } = useForm({
		mode: "onChange",
		defaultValues: {
			username: "",
			password: "",
		},
	});

	const navigate = useNavigate();
	const baseUrl = process.env.REACT_APP_BASE_URL;

	const [message, setMessage] = useState("");

	const onSubmit = async (data) => {
		try {
			await axios.post(`${baseUrl}/auth/login`, {
				username: data.username,
				password: data.password,
			});

			navigate("/");
		} catch (error) {
			setMessage(error.response?.data?.message);
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
									icon={FaUser}
									control={control}
									rules={{ required: "Username is required." }}
									message={formState.errors.username?.message}
								/>

								<InputField
									name="Password"
									type="password"
									icon={FaKey}
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
