import 'dotenv/config'
import express, { json } from 'express'
import { routes } from './routes'
import { SetupMongo } from './database'


SetupMongo().then(() => {

    const app = express()

    app.use(json())
    
    app.use(routes)
    
    app.listen(3333, () => console.log("🚀 App is runnig!"))
})

