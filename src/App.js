import './App.css';
import React from "react";

import {
     createBrowserRouter,
     RouterProvider,
     Route,
} from "react-router-dom";
import ReactDOM from "react-dom/client"

import HomePage from "./pages/HomePage";
import ContactInfoPage from "./pages/ContactInfoPage";
import ContactEditPage from "./pages/ContactEditPage";


//------------------------------------------------------------
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/show/:id",
        element: <ContactInfoPage />,
    },
    {
        path: "/edit/:id",
        element: <ContactEditPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
     <RouterProvider router={router} />
    </React.StrictMode>
);
//------------------------------------------------------------

function App () {
    return(
        <HomePage />
    )
}

export default App;