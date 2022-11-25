import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/BlogPage/Blog";
import Catagory from "../Component/CatagoryPage/Catagory";
import DashbordLayout from "../Component/Dashbord/DashbordLayout";
import MyProducts from "../Component/Dashbord/MyProdrcts/MyProducts";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import HomePage from "../Component/HomePage/Home/HomePage";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import Main from "../LayOut/Main";
import PrivetRouter from "./PrivetRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/', element: <HomePage></HomePage>
            },
            {
                path: '/home', element: <HomePage></HomePage>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            },
            {
                path: '/catagory/:brand',
                element: <PrivetRouter><Catagory></Catagory></PrivetRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/alllaptops/${params.brand}`)

            },
        ]
    },
    {
        path: "/dashbord",
        element: <DashbordLayout></DashbordLayout>,
        children: [
            {
                path: '/dashbord/myproduct',
                element: <MyProducts></MyProducts>,
            },
        ]
    }

])

export default router