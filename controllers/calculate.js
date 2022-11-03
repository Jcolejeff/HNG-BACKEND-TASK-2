import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const getUser = async (req, res) => {
	res.status(StatusCodes.OK).json({
		slackUsername: "Jefferyenokela",
		backend: true,
		age: 22,
		bio: "i go by jeffcole on the internet. I'm currently in the last lap of getting my degree in computer science, I've developed a strong grasp of computer science and web development ideas via my education and alot of online resources as well",
	});
};

export default getUser;
