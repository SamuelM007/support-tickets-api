import { data } from "../data/tickets.js";
import { getTicketById,filterTicket } from "../services/default.service.js";

export const status = async(req,res) => {
    res.status(200).json({
        "ok" : true,
        "service" : "Support Tickets API",
        "time" : new Date()
    });
};

export const getAllTickets = (req,res) => {
    const filtered = filterTicket(req.query);
    res.status(200).json({
        count : filtered.length,
        data : filtered
    });
}

export const getTicket = (req,res) => {
    const id = req.params.id;
    if(id){
        res.status(200).json(getTicketById(id));
    } else {
        res.status(404).json({
            message : "Ticket not found",
            id : id
        });
    }

}

export const getTicketTag = (req,res) => {
    const id = req.params.id;
    if(id){
        res.status(200).json(getTicketById(id).tags);
    } else {
        res.status(404).json({
            message : "Ticket not found",
            id : id
        });
    }
}

