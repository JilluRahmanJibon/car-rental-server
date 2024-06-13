import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { AuthServices } from "./auth.service";

const loginUser = catchAsync(async (req, res) => {
    const { user, accessToken } = await AuthServices.loginUser(req.body);
	res.status(httpStatus.OK).json({
		statusCode: httpStatus.OK,
		success: true,
		message: "User logged in successfully",
		data: user,
		token: accessToken,
	});
});

export const AuthControllers = {
	loginUser,
};
