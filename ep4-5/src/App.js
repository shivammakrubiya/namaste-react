import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import RestuarentMenu from "./components/RestaurentMenu";

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
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restuarents/:resId",
                element: <RestuarentMenu />
            }
        ],
        errorElement: <Error />
    }
]);

root.render(
    <RouterProvider router={router} />
);
