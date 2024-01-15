import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";


const UserHome = () => {
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    useEffect(() => {
        fetch('https://studynest-server.vercel.app/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    useEffect(() => {
        fetch(`https://studynest-server.vercel.app/completed-tasks/${user?.email}`)
            .then(res => res.json())
            .then(data => setCompletedTasks(data))
    }, [user?.email])
    return (
        <div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Total Task</h2>
                        <p>{tasks.length}</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Total Completed Task</h2>
                        <p>{completedTasks.length}</p>
                    </div>
                </div>

            </div>
            <div className="card bg-base-100 shadow-xl mt-10">
                <div className="card-body">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/X2xMzwL/defultuser.png'} />
                    </div>
                    <div>
                        <p>Welcome Back , {user?.displayName ? user?.displayName : "User"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;