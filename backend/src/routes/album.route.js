import { Router } from "express";

const router = Router()


router.get("/",(req,res)=>{
    res.send("Album is here with GET method")
})

export default router