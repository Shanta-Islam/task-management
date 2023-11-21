import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AssignmentCard = ({ assignment, handleDelete }) => {
    return (
        <div className="card card-compact lg:w-96 bg-base-100 shadow-xl border mx-auto ">
            < figure > <img src={assignment.photo} alt="product" className='w-2/5' /></figure >
            <div className="card-body">
                <h2 className="text-lg font-bold">{assignment.title}</h2>
                <p>Assignment Marks: {assignment.marks}</p>
                <p>Difficulty Level: {assignment.dLevel}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(assignment._id)} className="btn bg-red-400">Delete</button>
                    <Link to={`/assignment-details/${assignment._id}`} className='btn bg-[#7B67F6] text-white'>View</Link>
                    <Link to={`/updated-assignment/${assignment._id}`} className="btn bg-[#7B67F6] text-white">Update</Link>
                </div>
            </div>
        </div >
    );
};

AssignmentCard.propTypes = {
    assignment: PropTypes.object.isRequired,
    handleDelete: PropTypes.func
}

export default AssignmentCard;