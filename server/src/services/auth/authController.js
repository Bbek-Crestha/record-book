const { PrismaClient } = require("@prisma/client");

const { user } = new PrismaClient();

exports.login = async (req, res) => {
	const { username, password } = req.body;

	if (!username || !password) {
		res.status(400).json({
			status: "fail",
			message: "Please provide username and password.",
		});
	} else {
		const targetUser = await user.findUnique({
			where: { username },
		});

		if (!targetUser) {
			res.status(401).json({
				status: "fail",
				message: "User not found.",
			});
		} else {
			if (targetUser.password !== password) {
				res.status(401).json({
					status: "fail",
					message: "Incorrect password.",
				});
			} else {
				res.status(200).json({
					status: "success",
					message: targetUser,
				});
			}
		}
	}
};
