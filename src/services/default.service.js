import {data} from "../data/tickets.js";

export function getTicketById(id){
    
    return data.find((ticket) => ticket.id == id);
}

export function filterTicket(query){
    const {id,title,status,priority,assignee,createdAt} = query;
    return data.filter((ticket) => {
        if(priority && priority != ticket.priority){
            return false;
        }

        if(status && status != ticket.status){
            return false;
        }

        if(title && title != ticket.title){
            return false;
        }

        if(assignee && assignee != ticket.assignee){
            return false;
        }

        if(createdAt && createdAt != ticket.createdAt){
            return false;
        }
        return true;
    } );
}