import { NextFunction, Request, Response } from "express"
import { StatusCodes } from "http-status-codes"

import { AppError } from "../errors/app.error"

export function errorHandler(
  error: AppError | Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (error instanceof AppError) {
    return res.status(error.statusCodes).json({ message: error.message })
  }

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: error.message })
}
