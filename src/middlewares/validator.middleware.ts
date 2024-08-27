import { NextFunction, Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { ZodRawShape, z } from "zod"

import { AppError } from "../errors/app.error"

type ValidateParam = {
  schema: ZodRawShape
}

export function validator(param: ValidateParam) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = z.object(param.schema).safeParse(req.body)

    if (!result.success) {
      const formatedError = result.error.issues.map(
        (item) => `${item.path.join(".")}: ${item.message}`,
      )

      throw new AppError(formatedError, StatusCodes.UNPROCESSABLE_ENTITY)
    }

    req.body = result.data

    next()
  }
}
