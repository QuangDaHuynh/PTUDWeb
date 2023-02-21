// const req = require("express/lib/request");

const ApiError = require("../api-error");
const ContactService = require("../services/contact.service");
const ContactService = require("../services/contact.service");
const MongoDB = require("../utils/mongodb.util");

// exports.create=(req,res)=>{
//     res.send({message: "create handler"});
// };
// exports.findAll=(req,res)=>{
//     res.send({message: "findAll handler"});
// };
// exports.findOne=(req,res)=>{
//     res.send({message: "findOne handler"});
// };
// exports.update=(req,res)=>{
//     res.send({message: "update handler"});
// };
// exports.delete=(req,res)=>{
//     res.send({message: "delete handler"});
// };

// exports.deleteAll=(req,res)=>{
//     res.send({message: "deleteAll handler"});
// };
// exports.findallFavorite=(req,res)=>{
//     res.send({message: "findallFavorite handler"});
// };

exports.create=async(req,res,next)=>{
    if(!req.body?.name){
        return next(new ApiError(400,"name can not be empty"));
    }
    try{
        const ContactService=new ContactService(MongoDB.client);
        const document =await ContactService.create(req,body);
        return res.send(document);
    }catch(error){
        return next(
            new ApiError(500,"An error occurred while creating the contact")
        );
    }
};
exports.delete=async(req,res,next)=>{
    try{
        const ContactService=new ContactService(MongoDB.client);
        const document=await ContactService.delete(req.params.id);
        if(!document){
            return next (new ApiError(404,"contact not found"));
        }
        return res.send({message:"contact was delete successfully"});
    }catch(error){
        return next(
            new ApiError(
                500,
                `could not delete contact with id=${req.params.id}`
            )
        );
    }
};


