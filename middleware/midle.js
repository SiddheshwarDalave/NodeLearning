const fs = require('fs');

 function logRequestResponse(filename){
    return (req,res,next)=>{
        fs.appendFile(
            filename, `${Date.now()} :${req.ip} ${req.method}: ${req.path}\n`,
            (err,data)=>{
                next();
            }
        )
    }

}
module.exports={logRequestResponse,}