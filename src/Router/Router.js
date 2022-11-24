import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/BlogPage/Blog";
import Catagory from "../Component/CatagoryPage/Catagory";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import HomePage from "../Component/HomePage/Home/HomePage";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import Main from "../LayOut/Main";

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
                element: <Catagory></Catagory>,
                loader: ({ params }) => fetch(`http://localhost:5000/alllaptops/${params.brand}`)

            },
        ]
    }
])

export default router