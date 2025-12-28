import express from 'express';

const messsageRoute = express.Router();

messsageRoute.get("/message",()=> {
    "message route"
})

export default messsageRoute;

