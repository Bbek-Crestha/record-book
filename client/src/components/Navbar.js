import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
	Flex,
	Icon,
	Menu,
	MenuButton,
	Stack,
	StackDivider,
	Text,
	Tooltip,
} from "@chakra-ui/react";
import { IoHome } from "react-icons/io5";
import {
	AiFillFolderOpen,
	AiOutlineDoubleLeft,
	AiOutlineDoubleRight,
} from "react-icons/ai";
import { RiBillFill, RiLogoutBoxLine } from "react-icons/ri";

const menus = [
	{
		name: "Dashboard",
		route: "/",
		icon: AiFillFolderOpen,
	},
	{
		name: "Rent",
		route: "/rent",
		icon: IoHome,
	},
	{
		name: "Charges",
		route: "/charges",
		icon: RiBillFill,
	},
];

const Navbar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [show, setShow] = useState(true);

	const handleLogout = () => {
		if (window.confirm("Do you really want to logout?")) {
			navigate("/login");
		}
	};

	return (
		<Flex
			h="98vh"
			p="2"
			marginTop="1vh"
			flexDir="column"
			justifyContent="space-between"
			borderRight="1px solid primary.light"
			bg="blackAlpha.400"
			borderRadius="md"
		>
			<Stack divider={<StackDivider borderColor="primary.dark" />}>
				<Stack align="center">
					<Icon
						as={show ? AiOutlineDoubleLeft : AiOutlineDoubleRight}
						onClick={() => setShow(!show)}
						cursor="pointer"
						boxSize="20px"
					/>
				</Stack>

				<Stack spacing="3">
					<Menu>
						{menus.map(({ name, route, icon }) => (
							<Link to={route} key={name}>
								<Tooltip label={show ? "" : name}>
									<MenuButton
										bg={location.pathname === route ? "primary.light" : ""}
										color={location.pathname === route ? "white" : ""}
										p="2"
										w="100%"
										borderRadius="md"
										_hover={{
											bg: "primary.dark",
											color: "white",
										}}
									>
										<Stack direction="row" spacing="3" alignItems="center">
											<Icon as={icon} boxSize="24px" />
											{show && <Text fontSize="md">{name}</Text>}
										</Stack>
									</MenuButton>
								</Tooltip>
							</Link>
						))}
					</Menu>
				</Stack>
			</Stack>

			<Menu>
				<Tooltip label={show ? "" : "Logout"}>
					<MenuButton
						p="2"
						w="100%"
						borderRadius="md"
						_hover={{
							bg: "primary.dark",
							color: "white",
						}}
						onClick={handleLogout}
					>
						<Stack direction="row" spacing="3" alignItems="center">
							<Icon as={RiLogoutBoxLine} boxSize="24px" />
							{show && <Text fontSize="md">Logout</Text>}
						</Stack>
					</MenuButton>
				</Tooltip>
			</Menu>
		</Flex>
	);
};

export default Navbar;
