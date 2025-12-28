
import express from 'express'
import dotenv from 'dotenv'
import authrouter from './routes/auth/auth.js'
import messsageRoute from './routes/message/messge.route.js'

dotenv.config()

const app = express()

const port = process.env.PORT || 3000


app.use( "/api/auth",authrouter)
app.use( "/api/message",messsageRoute)

app.listen(port, ()=> {
    console.log('server running on port 3000 1233')
})