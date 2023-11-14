import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const SubmittedAssignmentCard = ({singleA}) => {
    const {user} =useContext(AuthContext);
    console.log(singleA)
    const handleOwnMark = ()=>{
        toast.error('You can not mark your own assignment')
    }
    return (
        <div>
            <div className="card card-compact lg:w-96 bg-base-100 shadow-xl border mx-auto ">
                <div className="card-body">
                    <h2 className="text-lg font-bold">{singleA?.assignmentTitle}</h2>
                    <p>Assignment Marks: {singleA?.assignmentMarks}</p>
                    <p>Examinee Name: {singleA?.examineeName}</p>
                    <div className="card-actions justify-end">
                        {user?.email === singleA.email ?
                           
                            <button
                            className="btn" onClick={handleOwnMark}>Give Mark</button>
                            :
                             <Link to={`/giveMark/${singleA?._id}`}><button
                            className="btn">Give Mark</button></Link>
                        }
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