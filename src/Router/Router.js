import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/BlogPage/Blog";
import Catagory from "../Component/CatagoryPage/Catagory";
import AddProduct from "../Component/Dashbord/AddProduct/AddProduct";
import AllBuyer from "../Component/Dashbord/AllBuyer/AllBuyer";
import AllSeller from "../Component/Dashbord/AllSeller/AllSeller";
import DashbordLayout from "../Component/Dashbord/DashbordLayout";
import MyProducts from "../Component/Dashbord/MyProdrcts/MyProducts";
import SellerProduct from "../Component/Dashbord/SellerProduct/SellerProduct";
import UserAdmin from "../Component/Dashbord/UserAdmin/UserAdmin";
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
        element: <PrivetRouter><DashbordLayout></DashbordLayout></PrivetRouter>,
        children: [
            {
                path: '/dashbord/myproduct',
                element: <MyProducts></MyProducts>,
            },
            {
                path: '/dashbord/addproduct',
                element: <AddProduct></AddProduct>,
            },
            {
                path: '/dashbord/useradmin',
                element: <UserAdmin></UserAdmin>,
            },
            {
                path: '/dashbord/sellerprodct',
                element: <SellerProduct></SellerProduct>,
            },
            {
                path: '/dashbord/allbuyer',
                element: <AllBuyer></AllBuyer>,
            },
            {
                path: '/dashbord/allseller',
                element: <AllSeller></AllSeller>,
            },
        ]
    }

])

export default router;