import { Router } from "express"
import packagejson from  "../../package.json"

export const baseRoutes = Router()


baseRoutes.get('/', (_, res) => {
    const {author, description, name, version} = packagejson

    res.status(200).json({author, description, name, version})
})