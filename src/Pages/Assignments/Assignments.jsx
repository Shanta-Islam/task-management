import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import { useState } from "react";

const Assignments = () => {
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
    console.log(assignments);
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
                    assignments.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;