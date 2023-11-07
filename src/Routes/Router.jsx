import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Assignments from "../Pages/Assignments/Assignments";
import Register from "../Pages/Register/Register";
import CreateAssignments from "../Pages/CreateAssignments/CreateAssignments";
import AssignmentDetails from "../Pages/AssignmentDetails/AssignmentDetails";
import SubmittedAssignments from "../Pages/SubmittedAssignments/SubmittedAssignments";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/all-assignments",
          element: <Assignments></Assignments>,
          loader: ()=> fetch('http://localhost:5000/assignments')
        },
        {
          path: "/create-assignments",
          element: <CreateAssignments></CreateAssignments>
        },
        {
          path: "/assignment-details/:id",
          element: <AssignmentDetails></AssignmentDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/assignment-details/${params.id}`)
        },
        {
          path: "/submitted-assignments",
          element: <SubmittedAssignments></SubmittedAssignments>,
          loader: ()=> fetch('http://localhost:5000/submitted-assignment')
        }
        
        
      ],
      
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/register",
      element: <Register></Register>
    }
  ]);

  export default router;