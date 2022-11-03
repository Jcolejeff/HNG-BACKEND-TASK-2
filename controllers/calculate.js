import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const Calculate = async (req, res) => {
	const { operation_type, x, y } = req.body;
	let result = "";
	let operation = "";
	if (operation_type === "addition") {
		result = x + y;
		operation = "addition";
	} else if (operation_type === "subtraction") {
		result = x - y;
		operation = "subtraction";
	} else if (operation_type === "multiplication") {
		result = x * y;
		operation = "multiplication";
	} else {
		res
			.status(StatusCodes.BAD_REQUEST)
			.json({ msg: "please provide valid operator" });
		return;
	}
	res.status(StatusCodes.OK).json({
		slackUsername: "jcolejeff",
		result: result,
		operation_type: operation,
	});
};

export default Calculate;
