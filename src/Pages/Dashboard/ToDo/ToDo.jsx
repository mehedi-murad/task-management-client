import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ToDo = () => {
    const [toDo, setToDO] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tasks')
        .then(res => res.json())
        .then(data => {
            setToDO(data)
        })
    },[])
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-4xl text-white font-bold text-center mt-24'>ToDo List</h2>
            <div className='divider divider-secondary'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {
                    toDo.map(task =><div key={task._id} className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                        <h2 className="card-title font-bold">{task.title}</h2>
                        <p>{task.details}</p>
                        <p className='font-semibold'>Deadline: {task.deadline}</p>
                        <h3 className='font-semibold'>Priority: {task.priority}</h3>
                        <div className='flex justify-end gap-4'>
                                <Link to={`/dashboard/updateToDo/${task._id}`}><FaEdit></FaEdit></Link>
                                <Link className='text-red-700'><FaTrash></FaTrash></Link>
                        </div>
                        </div>
                        
                        
                  </div>)
                }
            </div>
        </div>
    );
};

export default ToDo;