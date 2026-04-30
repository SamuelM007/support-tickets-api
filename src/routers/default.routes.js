import { Router } from "express";
import {status} from "../controllers/default.controller.js"

const router = Router();

router.get("/", (req, res) => {
    res.render("default", {
        title: "MVC Starter App",
        subtitle: "Express + EJS + Static Assets"
    });
});

router.get("/status", status);

export default router;