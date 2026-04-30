export const status = async(req,res) => {
    res.status(200).json({
        "ok" : true,
        "service" : "Support Tickets API",
        "time" : new Date()
    });
};