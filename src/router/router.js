import React from "react";
import {createBrowserRouter} from "react-router-dom";

import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/:formStatus/:id",
        element: <ContactPage/>,
    },

        // path: "/",
        // element: <Layout/>,
        // children: [
        //     {
        //         path: "/",
        //         element: <HomePage/>,
        //     },
        //     {
        //         path: "/:formStatus/:id",
        //         element: <ContactPage/>,
        //     },
        // ]

    ]);