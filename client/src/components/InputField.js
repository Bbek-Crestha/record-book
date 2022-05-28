import { useState } from "react";
import { Controller } from "react-hook-form";
import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	Icon,
	InputGroup,
	InputLeftElement,
	InputRightElement,
} from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const InputField = (props) => {
	const { name, type, icon: LeftIcon, control, rules, message } = props;

	const [show, setShow] = useState(false);
	return (
		<Controller
			name={name.toLowerCase()}
			control={control}
			rules={rules}
			render={({ field: { value, onChange }, fieldState: { error } }) => (
				<FormControl isInvalid={error}>
					<FormLabel htmlFor={name}>{name}:</FormLabel>

					<InputGroup>
						{LeftIcon && (
							<InputLeftElement
								pointerEvents="none"
								children={<Icon as={LeftIcon} />}
							/>
						)}
						<Input
							name={name}
							type={type === "password" ? (show ? "text" : type) : type}
							borderColor={error ? "red" : "black"}
							value={value}
							onChange={(e) => onChange(e)}
						/>
						{type === "password" && (
							<InputRightElement>
								{show ? (
									<Icon
										as={AiFillEyeInvisible}
										cursor="pointer"
										onClick={() => setShow(false)}
									/>
								) : (
									<Icon
										as={AiFillEye}
										cursor="pointer"
										onClick={() => setShow(true)}
									/>
								)}
							</InputRightElement>
						)}
					</InputGroup>
					<FormErrorMessage>{message}</FormErrorMessage>
				</FormControl>
			)}
		/>
	);
};

InputField.defaultProps = {
	rules: {},
};

export default InputField;
