import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CarServices } from "./car.service";

const createCar = catchAsync(async (req, res) => {
	const result = await CarServices.createCarInToDb(req.body);
 
	sendResponse(res, {
		success: true,
		statusCode: 201,
		message: "Car created successfully",
		data: result,
	});
});

export const CarControllers = {
	createCar,
};
