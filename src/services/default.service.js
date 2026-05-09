import {data} from "../data/tickets.js";

export function getTicketById(id){
    
    return data.find((ticket) => ticket.id == id);
}

export function filterTicket(query){
    const {id,title,status,priority,assignee,createdAt,sort} = query;
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
    } ).sort((a,b) => {
        switch (sort){

            case "id":
                return Number(a.id)-Number(b.id);
            case "-id":
                return Number(b.id)-Number(a.id);


            case "title":
                return a.title.localeCompare(b.title);
            case "title":
                return b.title.localeCompare(a.title);
            

            case "status":
                if(a.status === b.status)return 0;
                if(a.status === "open")return -1;
                return 1;
            case "-status":
                if(a.status === b.status)return 0;
                if(a.status === "open")return 1;
                return -1;


            case "priority":
                if(a.priority === b.priority) return 0;
                if(a.priority === "critical" || b.priority === "low") return -1;
                if(b.priority === "critical" || a.priority === "low") return 1;
                if(a.priority === "high" || b.priority === "medium") return -1;
                return 1;
            case "-priority":
                if(a.priority === b.priority) return 0;
                if(a.priority === "critical" || b.priority === "low") return 1;
                if(b.priority === "critical" || a.priority === "low") return -1;
                if(a.priority === "high" || b.priority === "medium") return 1;
                return -1;


            case "assignee":
                return a.assignee.localeCompare(b.assignee);
            case "-assignee":
                return b.assignee.localeCompare(a.assignee);
            
            case "createdAt":
                return a.createdAt - b.createdAt;
            case "-createdAt":
                return b.createdAt - a.createdAt;


                
            default:
                return Number(a.id)-Number(b.id);;

        }
    });
}