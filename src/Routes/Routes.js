
import Main from "../Main/Main";

import Home from './../Pages/Home/Home';
import Category from './../Pages/Category/Category';
import Shop from './../Pages/Shop/Shop';
import FAQ from "../FAQ/FAQ";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import ErrorPage from './../ErrorPage/ErrorPage';
import Roots from "../Roots/Roots";
import Homes from "../Homes/Homes";
import PrivateRoute from './PrivateRoute/PrivateRoute';
import TermsAndCondition from "../Others/TermsAndCondition";
import Blog from './../Blog/Blog';
const { createBrowserRouter } = require("react-router-dom");



export const routes = createBrowserRouter([

        {
            path: '/',
            element: <Main></Main>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path: '/',
                    element: <Homes></Homes>,
                    
                    
                },
                {
                    path: '/homes',
                    element: <Homes></Homes>,
                    
                    
                },
                {
                    path: '/home',
                    element: <PrivateRoute><Home></Home></PrivateRoute>,
                    loader: () => fetch('https://assignment-ten-server-flame.vercel.app/shop')
                },
                {
                    path: '/category/:id',
                    element: <PrivateRoute><Category></Category></PrivateRoute>,
                    loader: ({params}) => fetch(`https://assignment-ten-server-flame.vercel.app/category/${params.id}`)
                },
                {
                    path: '/shop/:id',
                    element: <Shop></Shop>,
                    loader: ({params}) => fetch(`https://assignment-ten-server-flame.vercel.app/shop/${params.id}`)
                },
                {
                    path: '/faq',
                    element: <FAQ></FAQ>
                },
               {
                path:'/login',
                element: <Login></Login>
               },
               {
                path: '/register',
                element: <Register></Register>
               },
               {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
               },
               {
                path: '/blog',
                element: <Blog></Blog>
               }
        
                
            ]
           
        }
       
])