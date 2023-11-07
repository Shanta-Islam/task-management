import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";


const SubmittedAssignments = () => {
    const assignments = useLoaderData();
    const [assignment, setAssignment] = useState(assignments);
    return (
        <div className="p-20">
            <h2 className="text-center">Submitted Assignments: {assignments.length}</h2>
            <div className="overflow-x-auto mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Assignment Title</th>
                            <th>Assignment Marks</th>
                            <th>Examinee Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           assignment  && assignment.map(singleA => <tr key={singleA?._id}>

                                <td>{singleA?.assignmentTitle}</td>
                                <td>{singleA?.assignmentMarks}</td>
                                <td>{singleA?.examineeName}</td>
                                <td>
                                    <Link to={`/giveMark/${singleA?._id}`}><button
                                         className="btn">Give Mark</button></Link>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <Toaster />
        </div >
    );
};

export default SubmittedAssignments;