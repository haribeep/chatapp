
import express from 'express'
import dotenv from 'dotenv'
import authrouter from './routes/auth/auth.js'
import messsageRoute from './routes/message/messge.route.js'
import path from "path";

dotenv.config()

const app = express();
const __dirname = path.resolve(); 

const port = process.env.PORT || 3000


app.use( "/api/auth",authrouter)
app.use( "/api/message",messsageRoute);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../../frontend/dist")));

    app.get("/.*/", (req,res)=>{
        res.sendFile(path.join("../../frontend/dist/index.html"))
    })
}

app.listen(port, ()=> {
    console.log('server running on port 3000 1233')
})