const { NotFoundError } = require('../errors');
const Todo = require('../models/Todo');
const {StatusCodes} = require('http-status-codes');

const createTodo = async(req,res)=>{
    const todo = await Todo.create(req.body)
    res.status(StatusCodes.CREATED).json({data:todo})
}


const updateTodo= async (req,res)=>{
    const { todoId } = req.params;
    const todo = await Todo.findOneAndUpdate({_id:todoId,createdBy:req.userId}, req.body,{new:true})
    if(!todo){
        throw new NotFoundError(`Todo Item with: ${todoId} does found`)
    }
    res.status(StatusCodes.OK).json({data:todo})
}


const getAllTodo = async (req,res)=>{
    const todoList = await Todo.find({createdBy:req.userId});
    res.status(200).json({data:todoList});
}

const getTodo = async (req,res)=>{
    //const {userId} = req.user;
    const { todoId }= req.params;
    const todo = await Todo.findOne({_id:todoId,createdBy:req.userId});
    if(!todo){
        throw new NotFoundError(`Todo with id: ${todoId}, Not Found`)
    }
    res.status(200).json({data:todo})
}

const deleteTodo = async (req,res)=>{
    //const { userId} = req.user;
    const { todoId} = req.params;
    const todo = await Todo.deleteOne({_id:todoId,createdBy:req.userId})
    if(!todo){
        throw new NotFoundError(`Todo with id: ${todoId}, Not Found`)
    }
    res.status(200).json({data:todo});
}

module.exports = {createTodo, updateTodo, getAllTodo, getTodo, deleteTodo};
