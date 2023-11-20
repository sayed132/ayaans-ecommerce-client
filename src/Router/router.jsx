import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import Error from "../Error/Error";
import Profile from "../Pages/Home/Home/Profile/Profile";
import ProductDetails from "../Pages/Home/Home/ProductDetails/ProductDetails";
import { Mens_kurta } from "../Pages/Home/Data/Mens_kurta";
import Product from "../Pages/Home/Home/Product/Product";

const router = createBrowserRouter([

    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/all-products',
                element: <Product />,
            },
            {
                path: '/product/:id',
                element: <ProductDetails />,
            },

        ]
    },

])

export default router;