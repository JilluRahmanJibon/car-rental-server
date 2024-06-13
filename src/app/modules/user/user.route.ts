import { Router } from "express";
import { UserControllers } from "./user.controller";
import { UserValidatios } from "./user.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = Router();

router.post(
	"/signup",
	validateRequest(UserValidatios.createUserValidation),
	UserControllers.createUser
);

export const UserRoutes = router;
