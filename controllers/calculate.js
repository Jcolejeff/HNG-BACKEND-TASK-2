import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const Calculate = async (req, res) => {
	const { operation_type, x, y } = req.body;
	const enumValues = {
		addition: "addition",
		subtraction: "subtraction",
		multiplication: "multiplication",
	};
	let result = "";
	if (operation_type === enumValues.addition) {
		result = x + y;
	} else if (operation_type === enumValues.subtraction) {
		result = x - y;
	} else if (operation_type === enumValues.multiplication) {
		result = x * y;
	} else {
		throw new BadRequestError("please provide valid operator");
	}
	res.status(StatusCodes.OK).json({
		slackUsername: "jcolejeff",
		result: result,
		operation_type: enumValues[operation_type],
	});
};

export default Calculate;
