import express from "express"


const router=express.Router();



router.get("/",getSearchedMovie);




export default router;