import { Router } from "express";
import {status, getAllTickets} from "../controllers/default.controller.js"

export const router = Router();

router.get("/", (req, res) => {
    res.render("default", {
        title: "MVC Starter App",
        subtitle: "Express + EJS + Static Assets"
    });
});

router.get("/tickets",getAllTickets);

router.get("/status", status);

export default router;