import express from 'express';

const authrouter = express.Router();


authrouter.get("/signup",()=> {
    res.send("signup endpoint")
})


authrouter.get("/signin",()=> {
    res.send("signin endpoint")
})

authrouter.get("/logout",()=> {
    res.send("logout endpoint")
})

export default authrouter;