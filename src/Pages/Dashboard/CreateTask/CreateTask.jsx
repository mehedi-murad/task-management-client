import { useForm } from "react-hook-form";
import './CreateTask.css'

const CreateTask = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {} 
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
                            {...register("details", { required: true })}
                            ></textarea>
                        {/* <input
                        type="text"
                        placeholder="Task Description"
                        name="details"
                        {...register("details", { required: true })}
                        className="input input-bordered"
                        /> */}
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
                <select {...register("priority")} className="select select-bordered w-full">
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
        </div>
    );
};

export default CreateTask;