import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import SubmittedAssignmentCard from "./SubmittedAssignmentCard";


const SubmittedAssignments = () => {
    const assignments = useLoaderData();
    const [loading, setLoading] = useState(true);
    const [assign, setAssign] = useState(assignments)
    const url = `https://studynest-server.vercel.app/submitted-assignment`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const remain = data && data.filter(d => d.statusValue === "Pending")
                setAssign(remain);
                setLoading(false);
            });

    }, [url])

    return (
        <div className="p-20">
            
            {!loading ?
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                {
                    assign && assign.map(singleA => <SubmittedAssignmentCard key={singleA._id} singleA={singleA}></SubmittedAssignmentCard>)
                }
            </div>
            :
            <div className="flex items-center">
                <span 
                    className={loading ? 'block loading loading-spinner text-primary loading-xl items-center' : 'hidden'}
                    aria-label="Extra large spinner example"
                    ></span>
                <span/>
            </div>
}
        </div>
            
    );
};

export default SubmittedAssignments;