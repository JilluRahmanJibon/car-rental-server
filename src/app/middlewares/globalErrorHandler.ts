/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from "express";
import { TErrorSources } from "../interface.ts/error";
import { ZodError } from "zod";
import handleZodErrror from "../errors/handleZodError";
import config from "../config";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
	let statusCode = 5000;
	let message = "Something went wrong!";

	let errorSources: TErrorSources = [
		{
			path: "",
			message: "Something went wrong!",
		},
	];

	if (err instanceof ZodError) {
		const simplifiedError = handleZodErrror(err);
		statusCode = simplifiedError?.statusCode;
		message = simplifiedError?.message;
		errorSources = simplifiedError?.errorSources;
    }  

	return res.status(statusCode).json({
		success: false,
		message,
		errorSources,
		stack: config.NODE_ENV === "development" ? err?.stack : null,
	});
};

export default globalErrorHandler;
