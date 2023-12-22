import { useForm } from "react-hook-form";
import './CreateTask.css'
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

const CreateTask = () => {
    const [toDo, setToDO] = useState([])
    const [ongoingTasks, setOngoingTasks] = useState([]);
    

    useEffect(() => {
        fetch('https://task-management-server-lovat.vercel.app/tasks')
        .then(res => res.json())
        .then(data => {
            setToDO(data)
        })
    },[])

    useEffect(() => {
        // Load tasks from localStorage on component mount
        const storedToDo = JSON.parse(localStorage.getItem('toDo')) || [];
        const storedOngoingTasks = JSON.parse(localStorage.getItem('ongoingTasks')) || [];

        setToDO(storedToDo);
        setOngoingTasks(storedOngoingTasks);
      }, []);

    const dragStarted = (e,id) => {
        e.dataTransfer.setData("todotask", id)
      }

      const dragOver = e =>{
        e.preventDefault()
        console.log('dragging over now')
      }

      const dropOn = e =>{
        e.preventDefault();
        const transferredTask = e.dataTransfer.getData('todotask')
        console.log('transferredTask', transferredTask)
        moveTaskToOngoing(transferredTask);
        
      }

      const moveTaskToOngoing = taskId => {
            // Remove the task with the given taskId from the ToDo section
        const remainingTasks = toDo.filter((task) => task._id !== taskId);

        // Find the task with the transferred taskId in your original data
        const movedTask = toDo.find((task) => task._id === taskId);

        // Update the state for the "Ongoing" tasks
        setOngoingTasks((prevOngoingTasks) => [...prevOngoingTasks, movedTask]);

        // Update the state for the "ToDo" tasks
        setToDO(remainingTasks);

        // Save updated tasks to localStorage
        localStorage.setItem('toDo', JSON.stringify(remainingTasks));
        localStorage.setItem('ongoingTasks', JSON.stringify([...ongoingTasks, movedTask]));
      }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      
      
      const onSubmit = (data) => {
        console.log(data)
        const taskInfo={
            title:data.title,
            details:data.details,
            deadline:data.deadline,
            priority:data.priority

        }

        fetch('https://task-management-server-lovat.vercel.app/tasks',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(taskInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Task created successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
        }) 
    }
    
    return (
        <div className='text-center max-w-4xl mx-auto'>
            <h2 className='text-4xl text-white font-bold my-24'>Create Your Task</h2>
            <div className="divider divider-secondary"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-white">Task Title</span>
                        </label>
                        <input
                        type="text"
                        placeholder="Task title"
                        name="title"
                        {...register("title", { required: true })}
                        className="input input-bordered"
                        />
                        {errors.name && (
                        <span className="text-red-500 mt-2">Task title is required</span>
                        )}
                    </div>

                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-white">Task Description</span>
                        </label>
                        <textarea 
                            placeholder="Enter the task description" 
                            className="textarea textarea-bordered textarea-lg w-full"
                            name="details"
                            {...register("details", { required: true })}
                            ></textarea>
                       
                        {errors.details && (
                        <span className="text-red-500 mt-2">
                            Task Details is required
                        </span>
                        )}
                    </div>

                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-white">Deadlines</span>
                        </label>
                        <input
                        type="date"
                        placeholder="Enter Deadline"
                        name="deadline"
                        {...register("deadline", { required: true })}
                        className="input input-bordered"
                        />
                        {errors.deadline && (
                        <span className="text-red-500 mt-2">deadline is required</span>
                        )}
                    </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Set the Priority</span>
                </label>
                <select {...register("priority")} className="select select-bordered w-full" name="priority">
                        <option  disabled selected>Set the priority</option>
                        <option>Low</option>
                        <option>Moderate</option>
                        <option>High</option>
                </select>
                {errors.priority && (
                    <span className="text-red-500 mt-2">Priority checking is required</span>
                    )}
              </div>

              <div className="form-control">
                <input className="bg-[#F92659] px-4 py-2 text-white font-semibold rounded-lg mt-10 btn-block"
                        type="submit" value="Task Submit"
                            />
              </div>
              
            </form>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                <div className="border rounded-lg">
                    <h2 className="text-white bg-[#F92659] px-4 py-2 font-semibold rounded-lg btn-block">ToDo Tasks</h2>
                    <div className="grid gap-4 p-2">
                    {
                        toDo.map(task =>
                        <div  draggable onDragStart={(e)=>dragStarted(e,task._id)}
                        className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                        <h2 className="card-title font-bold">{task.title}</h2>
                        <div className='flex justify-center gap-4'>
                                {/* <Link to={`/dashboard/updateToDo/${task._id}`}><FaEdit></FaEdit></Link> */}
                                {/* <Link onClick={()=> handleDelete(task._id)} className='text-red-700'><FaTrash></FaTrash></Link> */}
                        </div>
                        </div>
                        
                        
                        </div>)
                    }
                    </div>
                </div>
                <div droppable onDragOver={(e) => dragOver(e)} onDrop={(e)=>dropOn(e)} className="border rounded-lg">
                    <h2 className="text-white bg-[#F92659] px-4 py-2 font-semibold rounded-lg btn-block">Ongoing</h2>
                    <div className="grid gap-4 p-2">
                        {
                            ongoingTasks.map(task=>
                            <div
                            className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                            <h2 className="card-title font-bold">{task?.title}</h2>
                            <div className='flex justify-center gap-4'>
                                    {/* <Link to={`/dashboard/updateToDo/${task._id}`}><FaEdit></FaEdit></Link> */}

                            </div>
                            </div>
                            
                            
                            </div>
                                )
                        }
                    </div>
                </div>
                <div className="border rounded-lg">
                    <h2 className="text-white bg-[#F92659] px-4 py-2 font-semibold rounded-lg btn-block">Completed</h2>
                </div>
            </div>
        </div>
    );
};

export default CreateTask;