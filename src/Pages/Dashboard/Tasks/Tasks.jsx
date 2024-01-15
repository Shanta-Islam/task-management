import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Tasks = () => {
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState('');
    useEffect(() => {
        axios(`https://studynest-server.vercel.app/tasks?status=${status}`)
            .then(res => {
                setTasks(res.data)
                setLoading(false)
            }
            )
    }, [status])
    const handleDelete = (id) => {
        fetch(`https://studynest-server.vercel.app/delete-task/${id}?email=${user?.email}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    toast.error('You Are Not Create This Task ,So You Are Not Able to Delete')
                }
                else {

                    // remove the user from the UI

                    const remainingUsers = tasks && tasks.filter(item => (item._id !== id));
                    setTasks(remainingUsers);
                    toast.success('Deleted Successfully');

                }

            })
    }
    const handleCompleted = (id) => {
        fetch(`https://studynest-server.vercel.app/completed-task/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    toast.success("Completed Task Succesfully")
                }


            })
    }
    return (
        <div className="h-screen p-2">
            <label className="input-group">
                <select className="form-select border" aria-label="Default select example" onChange={(e) => setStatus(e.target.value)}>
                    <option selected value="">All</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                </select>
            </label>
            {
                !loading ?
                    <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-5 mt-10">
                        {
                            tasks?.map(task => <div key={task._id} className={`card ${task?.status === "completed" ? 'bg-[#9cbef2]' : 'bg-white'} shadow-xl`}>
                                <div className="card-body">
                                    <Link to={`/dashboard/updateTask/${task._id}`} className="border rounded text-center p-5">
                                        <h2 className="font-medium">{task.title}</h2>
                                        <p>Desc: {task.desc}</p>
                                        <p>Due Date: {task.dateValue}</p>
                                    </Link>
                                    <div className="card-actions justify-end">
                                        {task?.status === "completed" ? <button className="btn btn-sm btn-disabled">Task Completed</button> : <button className="btn btn-sm" onClick={() => handleCompleted(task._id)}>Completed</button>}
                                        <button className="btn btn-sm bg-red-400 text-white" onClick={() => handleDelete(task._id)} >Delete</button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                    :
                    <div className="flex items-center">
                        <span
                            className={loading ? 'block loading loading-spinner text-primary loading-xl items-center' : 'hidden'}
                            aria-label="Extra large spinner example"
                        ></span>
                        <span />
                    </div>
            }
            <Toaster />
        </div >
    );
};

export default Tasks;