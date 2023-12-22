
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToDo = () => {
    const toDo = useLoaderData()
    const {_id} = toDo;
    const handleUpdateToDo= e =>{
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const details = form.details.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;
        const updateToDo ={
            title, details, deadline, priority
        }

        fetch(`https://task-management-server-lovat.vercel.app/tasks/${_id}`, {
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateToDo)  
        })
        .then(res => res.json())
            .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                form.reset()
                Swal.fire({
                    imageUrl: 'https://i.ibb.co/VYGbm05/todo.png',
                    title: 'Congratulations!',
                    text: 'You have successfully Updated To DO task',
                    imageWidth: 300,
                    imageHeight: 300,
                    imageAlt: 'Custom image',
                  })
            }
        })
    }
    return (
        <div className='text-center max-w-4xl mx-auto'>
            <Helmet>
                <title>Update ToDo</title>
            </Helmet>
            <h2 className='text-4xl text-white font-bold my-24'>Update TO-DO</h2>
            <div className="divider divider-secondary"></div>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-white">Task Title</span>
                        </label>
                        <input
                        type="text"
                        placeholder="Task title"
                        defaultValue={toDo.title}
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
              
            </form> */}
            <form onSubmit={handleUpdateToDo} className="p-4">
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-white">Task Title</span>
                        </label>
                        <input
                        type="text"
                        defaultValue={toDo.title}
                        placeholder="Enter Task title"
                        name="title"
                        className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                            <label className="label">
                            <span className="label-text text-white">Task Description</span>
                            </label>
                            <textarea 
                            placeholder="Enter the task description" 
                            className="textarea textarea-bordered textarea-lg w-full"
                            name="details"
                            defaultValue={toDo.details}
                            ></textarea>
                            {/* <input
                            type="text"
                            defaultValue={toDo.details}
                            placeholder="Enter Task Details"
                            name="details"
                            className="input input-bordered"
                            /> */}
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text text-white">Deadlines</span>
                            </label>
                            <input
                            type="date"
                            defaultValue={toDo.deadline}
                            placeholder="Enter Deadline"
                            name="deadline"
                            className="input input-bordered"
                            />
                        </div>
                   
                    <div className="form-control w-full">
                            <label className="label">
                            <span className="label-text text-white">Set the Priority</span>
                            </label>
                            <select defaultValue={toDo.priority} className="select select-bordered w-full" name="priority">
                                <option  disabled selected>Set the priority</option>
                                <option>Low</option>
                                <option>Moderate</option>
                                <option>High</option>
                            </select>
                        </div>
                    <div>
                        <input type="submit" value="Update toDo" className="bg-[#F92659] px-4 py-2 text-white font-semibold rounded-lg mt-10 btn-block" />
                    </div>
                </form>
        </div>
    );
};

export default UpdateToDo;