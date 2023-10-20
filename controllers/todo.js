const Todo = require('../models/Todo');

const createTodo = async(req,res)=>{
    const todo = await Todo.create(req.body)
    //const {name,description,startDate, endDate} = req.body;
    //console.log('Todo: ', todo)  
    res.status(200).json({data:todo})
}


const updateTodo= async (req,res)=>{
    const { todoId} = req.params;
    const todo = await Todo.findOneAndUpdate({_id:todoId}, req.body,{new:true})
    res.status(200).json({data:todo})
}


const getAllTodo = async (req,res)=>{
    const todoList = await Todo.find({});
    res.status(200).json({data:todoList});
}

const getTodo = async (req,res)=>{
    //const {userId} = req.user;
    const { todoId }= req.params;
    console.log('TodoId: ', todoId)
    const todo = await Todo.findOne({_id:todoId});
    res.status(200).json({data:todo})
}

const deleteTodo = async (req,res)=>{
    //const { userId} = req.user;
    const { todoId} = req.params;
    const todo = await Todo.deleteOne({_id:todoId})
    res.status(200).json({data:todo});
}

module.exports = {createTodo, updateTodo, getAllTodo, getTodo, deleteTodo};
