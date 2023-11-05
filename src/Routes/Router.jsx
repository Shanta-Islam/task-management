import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Assignments from "../Pages/Assignments/Assignments";
import Register from "../Pages/Register/Register";
import CreateAssignments from "../Pages/CreateAssignments/CreateAssignments";
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
        },
        {
          path: "/create-assignments",
          element: <CreateAssignments></CreateAssignments>
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