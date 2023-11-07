import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Toaster } from "react-hot-toast";

const MyAssignments = () => {
    const { user } = useContext(AuthContext);
    const [markedAssign, setMarkedAssign] = useState([]);
    const url = `http://localhost:5000/marked-assignment?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMarkedAssign(data));
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
                    <tbody>
                        {
                            markedAssign && markedAssign.map(item => <tr key={item?._id}>

                                <td>{item?.assigntitle}</td>
                                <td>{item?.status==="pending"? "completed": ""}</td>
                                <td>{item?.marks}</td>
                                <td>{item?.obtainMarks}</td>
                                <td>{item?.feedback}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <Toaster />
        </div >
    );
};

export default MyAssignments;