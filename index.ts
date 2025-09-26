import express, { type Request, type Response, type NextFunction } from "express";
import fs from 'fs/promises'



const app = express()

app.get('/Movies', (req: Request,  res: Response) => {
    fs.readFile("movies.json").then((data) => {
        res.send(data)
    })
})

//app.get('/Movies?id', (req))



const port = process.env.PORT || 3000

app.listen(port,  () => {
    console.log(`http://localhost:${port}`)
})