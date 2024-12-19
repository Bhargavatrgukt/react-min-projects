import React from 'react'

const Task = (props) => {
  const {task, editTask,deleteTask,index}=props  
  return (
    <li className='flex justify-between items-center'>
        <p className='justify-center mr-40'>{task}</p>
        <div>
            <button type='button' className="bg-green-500  text-white p-2 m-2 rounded-md" onClick={editTask}>Edit</button>
            <button type='button' className='bg-red-500 text-white p-2 m-2 rounded-md' onClick={deleteTask}>Delete</button>
        </div>
    </li>
  )
}

export default Task