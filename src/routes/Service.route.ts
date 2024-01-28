import { Router } from "express";

const router = Router();

router.route("/").get((req,res) => {
    res.send("Welcome from Service route 👀");
})

export default router;
