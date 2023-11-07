import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SubmittedAssignmentCard = ({singleA}) => {
    return (
        <div>
            <div className="card card-compact lg:w-96 bg-base-100 shadow-xl border mx-auto ">
                <div className="card-body">
                    <h2 className="text-lg font-bold">{singleA?.assignmentTitle}</h2>
                    <p>Assignment Marks: {singleA?.assignmentMarks}</p>
                    <p>Examinee Name: {singleA?.examineeName}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/giveMark/${singleA?._id}`}><button
                            className="btn">Give Mark</button></Link>
                    </div>
                </div>
            </div >
            <Toaster />
        </div>
    );
};
SubmittedAssignmentCard.propTypes = {
    singleA: PropTypes.object.isRequired,
}

export default SubmittedAssignmentCard;