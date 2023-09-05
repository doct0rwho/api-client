const mongoose = require('./db');
class Func{

    async getFuncion(req,res){
        try {
           
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                status: "error"
            })
        }
}
}
module.exports = new Func();