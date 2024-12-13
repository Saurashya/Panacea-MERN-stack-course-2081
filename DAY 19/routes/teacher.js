import express from 'express'

const router = express.Router();
const name="Teacher";

router.get("/add",)
router.get("/view",(req,res)=>{
    res.send(`${name} viewed successfully!`)
})
router.get("/update",(req,res)=>{
    res.send(`${name} updated successfully!`)
})
router.get("/delete",(req,res)=>{
    res.send(`${name} deleted successfully!`)
})

export default router
