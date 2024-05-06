import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import RestuarentMenu from "./components/RestaurentMenu";
import Shimmer from "./components/Shimmer";

//* Lazy Loading & on demand import
const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))

//* App Layout
const AppLayout = () => {

    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer />}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restuarents/:resId",
                element: <RestuarentMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>
            }
        ],
        errorElement: <Error />
    }
]);

root.render(
    <RouterProvider router={router} />
);
