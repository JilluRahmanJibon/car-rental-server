import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CarValidations } from "./car.validation";
import { CarControllers } from "./car.controller";
import auth from "../../middlewares/auth";

const router  = Router()


router.post('/',auth('admin'),validateRequest(CarValidations.createCarSchemaValidation),CarControllers.createCar)

export const CarRoutes=router
