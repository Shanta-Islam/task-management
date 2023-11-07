import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const Assignments = () => {
    const { user } = useContext(AuthContext);
    const allAssignments = useLoaderData();
    const [assignments, setAssignments] = useState(allAssignments);
    const handleDifficultyLevel = (e) => {
        e.preventDefault();
        let arr = [];
        let value = e.target.value;
        console.log(value);
        allAssignments.filter((singleAssign) => {
            if (singleAssign.dLevel === value) {
                arr.push(singleAssign);
                return arr;
            }
            setAssignments(arr);
        })


    }
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete-assignment/${user?.email}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    
                    // remove the user from the UI
                    
                    const remainingUsers = assignments && assignments.filter(item => item?._id !== id);
                    setAssignments(remainingUsers);
                    toast.success('Deleted Successfully');
                   
                }
                else{
                    toast.error('You Are Not Able to Delete')
                }
            })
    }
    // console.log(assignments);
    return (
        <div className="py-28 px-5">
            <label className="input-group">
                <select className="form-select border" aria-label="Default select example" onChange={handleDifficultyLevel}>
                    <option selected>By Difficulty Level</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </label>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
                {
                    assignments.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment} handleDelete={handleDelete}></AssignmentCard>)
                }
            </div>
            <Toaster/>
        </div>
    );
};

export default Assignments;