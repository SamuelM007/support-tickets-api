import { Router } from "express";
import {status, getAllTickets, getTicket,getTicketTag} from "../controllers/default.controller.js"

export const router = Router();

router.get("/", (req, res) => {
    res.render("default", {
        title: "MVC Starter App",
        subtitle: "Express + EJS + Static Assets"
    });
});

router.get("/tickets",getAllTickets);

router.get("/ticket/:id",getTicket);

router.get("/ticket/:id/tags",getTicketTag);

router.get("/status", status);

export default router;