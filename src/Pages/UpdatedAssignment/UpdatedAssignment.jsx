import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";

const UpdatedAssignment = () => {
    // const { user } = useContext(AuthContext);
    const assignment = useLoaderData();
    const {_id, title, desc, marks, photo,dLevel, dateValue} = assignment;
    const handleUpdateAssignment = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const desc = form.desc.value;
        const marks = form.marks.value;
        const photo = form.photo.value;
        const dLevel = form.dLevel.value;
        const dateValue = form.dateValue.value;

        const updateAssignment = { title, desc, marks, photo, dLevel, dateValue }
        // console.log(newAssignment);
        fetch(`http://localhost:5000/updated-assignment/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    toast.success('Assignment Updated Successfully')
                }
                

            })

    }
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="p-20">
            <h2 className="text-2xl font-bold text-center">Update Assignment</h2>
            <form onSubmit={handleUpdateAssignment}>
                {/* form title and desc row */}
                <div className="md:flex mb-8 mt-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Assignment Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" defaultValue={title} placeholder="Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Assignment Description</span>
                        </label>
                        <label className="input-group">
                            <textarea name="desc" defaultValue={desc} className="textarea textarea-bordered w-full" placeholder="Description"></textarea>
                        </label>
                    </div>
                </div>
                {/* form marks and img url row */}
                <div className="md:flex mb-8 mt-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Marks</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="marks" defaultValue={marks} placeholder="Marks" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Thumbnail Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form difficulty level and date row */}
                <div className="md:flex mb-8 mt-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Difficulty Level</span>
                        </label>
                        <label className="input-group">
                            <select className="select select-bordered w-full" name='dLevel' defaultValue={dLevel}>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Due Date</span>
                        </label>
                        <label className="input-group">
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} name="dateValue" defaultValue={dateValue} className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Update Assignment" className="btn btn-block" />

            </form>
            <Toaster />
        </div>
    );
};

export default UpdatedAssignment;