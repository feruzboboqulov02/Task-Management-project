import Task from "../models/Task.js";

const createTask=async (req,res)=>{
    try {
        const task = await Task.create({...req.body, user:req.user.userId});
        res.status(201).json({task});
    } catch (error) {
         return next(new Error('Invalid task data entered'));

    }
}



const getTasks=async (req,res)=>{
    const {status,dueBefore} =req.query
    const filter = {user: req.user.userId}

    if(status) filter.status = status;
    if(dueBefore) filter.due_Date = {$lt: new Date(dueBefore)};

    const tasks = await Task.find(filter).sort({duedate:1});
    res.status(200).json({tasks});
}


const getTaskById = async (req,res)=>{
    const {id} = req.params;
    const task = await Task.findOne({_id:id});
    res.status(200).json({task});
}

const updateTask = async (req,res)=>{
    const task = await Task.findOneAndUpdate({_id:req.params.id, user:req.param.userId},req.body,{new:true});
    if(!task){
        return next(new Error('The task is not found'));

    }
    res.status(200).json({task});
}

const deleteTask= async (req,res)=>{
    const task = await Task.findOneAndDelete({_id:req.params.id,user:req.user.userId});
    if(!task){
        return next(new Error('The task is not found'));
    }
    res.status(200).json({message: "Task deleted successfully", task});
}

export  {createTask, getTasks, getTaskById, updateTask, deleteTask};
