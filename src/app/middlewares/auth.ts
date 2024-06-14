import { NextFunction, Request, Response } from "express";
import { TUserRole } from "../modules/user/user.interface";
import catchAsync from "../utils/catchAsync";
import AppError from "../errors/AppError";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { User } from "../modules/user/user.model";

const auth = (...requiredRoles: TUserRole[]) => {
	return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
		const authorization = req.headers.authorization;
		const token = authorization?.split(" ")[1];

		if (!token) {
			throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
		}

		const decoded = jwt.verify(
			token,
			config.jwt_access_secret as string
		) as JwtPayload;
		const { role, userEmail } = decoded;

		const user = await User.isUserExistsByEmail(userEmail);
		if (!user) {
			throw new AppError(httpStatus.NOT_FOUND, "This user is not Found!");
		}

		if (requiredRoles && !requiredRoles.includes(role)) {
			throw new AppError(
				httpStatus.UNAUTHORIZED,
				"You are not Authorized for the access!"
			);
		}
		req.user = decoded as JwtPayload;
		next();
	});
};
export default auth;
