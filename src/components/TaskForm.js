import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../features/task/taskSlice';
import { editTask } from '../features/task/taskSlice';
import { v4 as uuid  } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {

  const navigate = useNavigate();
  const params = useParams();
  const tasks =useSelector(state => state.tasks);
  const [task, setTask] = useState(
    {
      title: '',
      description: ''
    }
  );

  const dispatch = useDispatch();



  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(params.id){
      dispatch(editTask(task));
    }else{
      dispatch(addTask({
        ...task,
        id: uuid()
      }));

     
    }

    navigate('/');
    
  }

  useEffect(() => {
    if(params.id){
      const taskToEdit = tasks.find(task => task.id === params.id);
      setTask(taskToEdit);
      }
      
    
  }, [params.id, tasks])



  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
        <label htmlFor="title" className='block mb-2 text-sm font-bold'>Title</label>
        <input  className='w-full p-2 rounded-md bg-zinc-600 mb-2' type="text" value={task.title} onChange={handleChange} name='title' placeholder="Write a task"/>
        <br/> 
        <br/>
        <label htmlFor="description" className='block mb-2 text-xs font-bold'>Title</label>
        <textarea  className='w-full p-2 rounded-md bg-zinc-600 mb-2'  name='description' value={task.description} onChange={handleChange} placeholder="Write a description"/>
        <br/>
        <br/>
        <button className='bg-indigo-600 px2  px-2 py-1' type="submit">Save</button>
      </form>

    </div>
  )
}

export default TaskForm