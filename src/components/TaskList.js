import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { deleteTask } from '../features/task/taskSlice';
import { Link } from 'react-router-dom';

const TaskList = () => {

  const dispatch= useDispatch();
  const tasks = useSelector(state => state.tasks);
 

  const handleDelete = (taskId) => {
   dispatch(deleteTask(taskId));
  }

  return (
    <div className='w-4/6 '>
<header className='flex justify-between items-center py-4'>
  <h1>Task List {tasks.length}</h1>
  <Link to="/create-task" className='bg-indigo-600 px-2 py-1 rounded-sm text-sm'>Create Task</Link>

  

</header>
<div className='grid grid-cols-3 gap-4'>
      {
        tasks.map(task => (
          <div key={task.id} className="bg-neutral-800 p-4 rounded-md ">
            <header className='flex '>
            <h3>{task.title}</h3>            
          <div className='flex items-center ml-auto'>
            <Link to={`/edit-task/${task.id}`} className='bg-indigo-600 px-2 py-1 rounded-md text-sm'>Edit</Link>
            <button onClick={() => handleDelete(task.id)} className='bg-red-600 px-2 py-1 rounded-md text-sm ml-2'>Delete</button>
          </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))
      }

    </div>
    </div>
  )
}

export default TaskList