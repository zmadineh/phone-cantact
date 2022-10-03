import './App.css';
import React, {useState} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

function App () {

    const [contact, setContact] = useState( [
        {id: 1, name: 'Zahra', family: 'Madineh', age: '25', gender: 'female', country: 'iran', city: 'isfahan', number:'091111111', email:'zahra@gmail.com', image: `https://avatars.dicebear.com/api/female/1.svg`, favourite: false, enable: false},
        {id: 2, name: 'Mahdi', family: 'Ahmadi', age: '25', gender: 'male', country: 'iran', city: 'isfahan', number:'092222222', email:'mahdi@gmail.com', image: `https://avatars.dicebear.com/api/male/2.svg`, favourite: true, enable: false},
        {id: 3, name: 'Ali', family: 'Madineh', age: '25', gender: 'male', country: 'iran', city: 'isfahan', number:'093333333', email:'ali@gmail.com', image: `https://avatars.dicebear.com/api/male/3.svg`, favourite: false, enable: false},
    ])

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage contact={contact} setContact={setContact}/>,
        },
        {
            path: "/add/:id",
            element: <ContactPage contact={contact} setContact={setContact} formStatus={'Add'}/>,
        },
        {
            path: "/show/:id",
            element: <ContactPage contact={contact} setContact={setContact} formStatus={'Show'}/>,
        },
        {
            path: "/update/:id",
            element: <ContactPage contact={contact} setContact={setContact} formStatus={'Update'}/>,
        },
    ]);

    return (
     <RouterProvider router={router} />
    )
}

export default App;