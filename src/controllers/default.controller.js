import { data } from "../data/tickets.js";
import { getTicketById } from "../services/default.service.js";

export const status = async(req,res) => {
    res.status(200).json({
        "ok" : true,
        "service" : "Support Tickets API",
        "time" : new Date()
    });
};

export const getAllTickets = (req,res) => {
    res.status(200).json(data);
}

export const getTicket = (req,res) => {
    const id = req.params.id;
    if(id){
        console.log(getTicketById(id));
        res.status(200).json(getTicketById(id));
    } else {
        res.status(404).json({
            message : "Ticket not found",
            id : id
        });
    }

}