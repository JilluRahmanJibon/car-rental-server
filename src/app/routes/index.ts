import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";

const router = Router();
const modulesRoutes = [
	{ path: "/auth", route: UserRoutes },
	{ path: "/auth", route: AuthRoutes },
];
modulesRoutes.forEach(route => router.use(route.path, route.route));
export default router;
