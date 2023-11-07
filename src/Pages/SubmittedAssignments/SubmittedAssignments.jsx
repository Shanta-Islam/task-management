import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import SubmittedAssignmentCard from "./SubmittedAssignmentCard";


const SubmittedAssignments = () => {
    const assignments = useLoaderData();
    const [assign, setAssign] = useState(assignments)
    const url = `http://localhost:5000/submitted-assignment`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const remain = data && data.filter(d => d.statusValue === "Pending")
                setAssign(remain);

            });

    }, [url])

    return (
        <div className="p-20">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                {
                    assign && assign.map(singleA => <SubmittedAssignmentCard key={singleA._id} singleA={singleA}></SubmittedAssignmentCard>)
                }
            </div>
        </div>
    );
};

export default SubmittedAssignments;