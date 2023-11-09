import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Toaster } from "react-hot-toast";

const MyAssignments = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [markedAssign, setMarkedAssign] = useState([]);
    const url = `https://studynest-server.vercel.app/marked-assignment?email=${user?.email}`;
    useEffect(() => {
        fetch(url, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                setMarkedAssign(data);
                setLoading(false)
            });
    }, [url])
    return (
        <div className="p-20">
            <h2 className="text-center">My Assignments: {markedAssign.length}</h2>
            <div className="overflow-x-auto mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Assignment Title</th>
                            <th>Assignment Status</th>
                            <th>Assignment Marks</th>
                            <th>Obtain Marks</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    {
                        !loading ?
                            <tbody>
                                {
                                    markedAssign && markedAssign.map(item => <tr key={item?._id}>

                                        <td>{item?.assigntitle}</td>
                                        <td>{item?.status === "Pending" ? "Completed" : ""}</td>
                                        <td>{item?.marks}</td>
                                        <td>{item?.obtainMarks}</td>
                                        <td>{item?.feedback}</td>
                                    </tr>)
                                }

                            </tbody>
                            :
                            <div className="flex items-center">
                                <span
                                    className={loading ? 'block loading loading-spinner text-primary loading-xl items-center' : 'hidden'}
                                    aria-label="Extra large spinner example"
                                ></span>
                                <span />
                            </div>
                    }
                </table>
            </div>
            <Toaster />
        </div >
    );
};

export default MyAssignments;