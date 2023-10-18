const createTodo = (req,res)=>{
    //const {name,description,startDate, endDate} = req.body;
    //console.log('Todo: ', todo)  
    res.status(200).json({data:req.body})
}


const updateTodo= (req,res)=>{
    const { todoId} = req.params;
    res.status(200).json({data:req.body})
}


const getAllTodo = (req,res)=>{
    //const {userId} = req.user;
    res.status(200).json({data:[]});
}

const getTodo = (req,res)=>{
    //const {userId} = req.user;
    const { todoId }= req.params;
    res.status(200).json({data:{}})
}

const deleteTodo = (req,res)=>{
    //const { userId} = req.user;
    const { todoId} = req.params;
    res.status(200).json({data:[]});
}

module.exports = {createTodo, updateTodo, getAllTodo, getTodo, deleteTodo};
