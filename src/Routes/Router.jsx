import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Tasks from "../Pages/Dashboard/Tasks/Tasks";
import AddTask from "../Pages/Dashboard/AddTask/AddTask";
import UpdateTask from "../Pages/Dashboard/UpdateTask/UpdateTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'userhome',
        element: <UserHome></UserHome>
      },
      {
        path: 'tasks',
        element: <Tasks></Tasks>
      },
      {
        path: 'addTask',
        element: <AddTask></AddTask>
      },
      {
        path: 'updateTask/:id',
        element: <UpdateTask></UpdateTask>,
        loader: ({params})=> fetch(`http://localhost:5000/task-details/${params.id}`)
      },
      
    ]
  },


]);

export default router;