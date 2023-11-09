import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Assignments from "../Pages/Assignments/Assignments";
import Register from "../Pages/Register/Register";
import CreateAssignments from "../Pages/CreateAssignments/CreateAssignments";
import AssignmentDetails from "../Pages/AssignmentDetails/AssignmentDetails";
import SubmittedAssignments from "../Pages/SubmittedAssignments/SubmittedAssignments";
import UpdatedAssignment from "../Pages/UpdatedAssignment/UpdatedAssignment";
import GiveMarkAssign from "../Pages/GiveMarkAssign/GiveMarkAssign";
import MyAssignments from "../Pages/MyAssignments/MyAssignments";
import PrivateRoute from "./PrivateRoute";
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
          // loader: ()=> fetch('https://studynest-server.vercel.appassignments'),  
        },
        {
          path: "/create-assignments",
          element: <PrivateRoute><CreateAssignments></CreateAssignments></PrivateRoute>
        },
        {
          path: "/assignment-details/:id",
          element: <PrivateRoute><AssignmentDetails></AssignmentDetails></PrivateRoute>,
          loader: ({params})=> fetch(`https://studynest-server.vercel.app/assignment-details/${params.id}`)
        },
        {
          path: "/submitted-assignments",
          element: <PrivateRoute><SubmittedAssignments></SubmittedAssignments></PrivateRoute>,
          loader: ()=> fetch('https://studynest-server.vercel.app/submitted-assignment')
        },
        {
          path: "/updated-assignment/:id",
          element: <PrivateRoute><UpdatedAssignment></UpdatedAssignment></PrivateRoute>,
          loader: ({params})=> fetch(`https://studynest-server.vercel.app/assignment-details/${params.id}`)
        },
        {
          path: "/giveMark/:id",
          element: <PrivateRoute><GiveMarkAssign></GiveMarkAssign></PrivateRoute>,
          loader: ({params})=> fetch(`https://studynest-server.vercel.app/submitted-assignment/${params.id}`)
          
        },
        {
          path: "/my-assignments",
          element: <PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>,
         
          
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