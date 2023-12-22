import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ToDo = () => {
    const axiosSecure = UseAxiosSecure()
    // const [toDo, setToDO] = useState([])

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
          const res = await axiosSecure.get("/tasks");
          return res.data;
        },
      });

    // useEffect(() => {
    //     fetch('http://localhost:5000/tasks')
    //     .then(res => res.json())
    //     .then(data => {
    //         setToDO(data)
    //     })
    // },[])

    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/tasks/${id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your tasks has been deleted.",
                            icon: "success"
                          });
                          refetch()
                    }
                })
            
            }
          });
        }
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-4xl text-white font-bold text-center mt-24'>ToDo List</h2>
            <div className='divider divider-secondary'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {
                    tasks.map(task =><div key={task._id} className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                        <h2 className="card-title font-bold">{task.title}</h2>
                        <p>{task.details}</p>
                        <p className='font-semibold'>Deadline: {task.deadline}</p>
                        <h3 className='font-semibold'>Priority: {task.priority}</h3>
                        <div className='flex justify-end gap-4'>
                                <Link to={`/dashboard/updateToDo/${task._id}`}><FaEdit></FaEdit></Link>
                                <Link onClick={()=> handleDelete(task._id)} className='text-red-700'><FaTrash></FaTrash></Link>
                        </div>
                        </div>
                        
                        
                  </div>)
                }
            </div>
        </div>
    );
};

export default ToDo;