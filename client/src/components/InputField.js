import { Controller } from "react-hook-form";
import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
} from "@chakra-ui/react";

const InputField = (props) => {
	const { name, type, control, rules, message } = props;
	return (
		<Controller
			name={name.toLowerCase()}
			control={control}
			rules={rules}
			render={({ field: { value, onChange }, fieldState: { error } }) => (
				<FormControl isInvalid={error}>
					<FormLabel htmlFor={name}>{name}:</FormLabel>
					<Input
						name={name}
						type={type}
						borderColor={error ? "red" : "black"}
						value={value}
						onChange={(e) => onChange(e)}
					/>
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
