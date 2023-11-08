
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const GiveMarkAssign = () => {
    const acceptAssignmentDetails = useLoaderData();
    const { _id, assignmentTitle,statusValue, assignmentMarks, email } = acceptAssignmentDetails;
    const handleStatus = id => {
        fetch(`https://studynest-server.vercel.app/submitted-assignment/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ statusValue: 'Completed' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                
            })

    }
    // console.log(statusV)
    const handleMarkAssignment = event => {
        event.preventDefault();
        const form = event.target;
        const obtainMarks = form.marks.value;
        const feedback = form.feedback.value;
        const ExamineeEmail = email;
        const assigntitle = assignmentTitle;
        const status = statusValue;
        const marks = assignmentMarks;


        const markAssignment = { marks, feedback, ExamineeEmail, assigntitle, status, obtainMarks }
        console.log(markAssignment);
        fetch('https://studynest-server.vercel.app/marked-assignment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(markAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Mark Submit Successfully')
                }
                form.reset();
            })

    }

    return (
        <div className="p-20">
            <p>Google drive link: {acceptAssignmentDetails.assignmentPdf}</p>
            <p>Note by Examinee: {acceptAssignmentDetails.note}</p>
            <form onSubmit={handleMarkAssignment}>
                <div className="md:flex mb-8 mt-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Give Mark</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="marks" placeholder="Give Mark" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Feedback</span>
                        </label>
                        <label className="input-group">
                            <textarea name="feedback" className="textarea textarea-bordered w-full" placeholder="Please Feedback"></textarea>
                        </label>
                    </div>
                </div>
                <input type="submit" onClick={()=>handleStatus(_id)} value="Submit" className="btn btn-block" />
            </form>
        </div>
    );
};

export default GiveMarkAssign;