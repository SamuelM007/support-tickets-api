import {data} from "../data/tickets.js";

export function getTicketById(id){
    
    return data.find((ticket) => ticket.id == id);
}