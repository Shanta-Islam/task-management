import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const AssignmentDetails = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const userName = user?.displayName;
    const[status, setStatus] = useState('Pending');
    console.log(userEmail)
    const singleAssignment = useLoaderData();
    const {title, marks} = singleAssignment;
    const handleTakeAssignment = (event) => {
        event.preventDefault();
        const form = event.target;
        const assignmentPdf = form.pdf.value;
        const note = form.note.value;
        const statusValue = status;
        const email = userEmail;
        const examineeName = userName;
        const assignmentTitle = title;
        const assignmentMarks = marks;
        const table = { assignmentPdf, note, statusValue,email,examineeName, assignmentTitle, assignmentMarks }
        // console.log(table);
        fetch('https://studynest-server.vercel.app/submitted-assignment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(table)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    toast.success('Take Assignment Successfully')
                }

            })
    }

    
    return (
        <div className="py-20">
            <div className="card card-compact w-2/5 bg-base-100 shadow-xl mx-auto">
                <figure><img src={singleAssignment.photo} alt="photo" className="w-2/5" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{singleAssignment.title}</h2>
                    <p>{singleAssignment.desc}</p>
                    <p>Marks: {singleAssignment.marks}</p>
                    <div className="card-actions justify-end ">
                        {/* <button onClick={() => handleTakeAssignment(singleAssignment)} className="btn">Take Assignment</button> */}
                        <button onClick={() => document.getElementById('takeAssign').showModal()} className="btn bg-[#7B67F6] text-white">Take Assignment</button>
                    </div>

                </div>

            </div>
            <Toaster />
            <dialog id="takeAssign" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleTakeAssignment}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Assignment Pdf Link</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="pdf" placeholder="Pdf Link" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Note Text</span>
                            </label>
                            <label className="input-group">
                                <textarea name="note" className="textarea textarea-bordered w-full" placeholder="Give a Quick Note Text"></textarea>
                            </label>
                        </div>



                        <input type="submit" value="Submit" className="btn btn-block bg-[#7B67F6] text-white mt-5" />
                        
                    </form>
                    {/* <button className="btn">Close</button> */}
                </div>
            </dialog>

        </div>
    );
};

export default AssignmentDetails;