import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Candies from './components/Candies';
import Candy from './components/Candy';
import CreateCandy from './components/CreateCandy';
import EditCandy from './components/EditCandy';
import Error from './components/Error';
import Register from './components/Register';
import Nav from './components/Nav';
import Login from './components/Login';
import DeleteCandy from './components/DeleteCandy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Nav/><Login/></>,
    errorElement: <Error/>
  },
  {
    path: "/register",
    element: <><Nav/><Register/></>,
    errorElement: <Error/>
  },
  {
    path: "/candies",
    element: <><Nav/><Candies/></>,
    errorElement: <Error/>
  },
  {
    path: "/candy/:candyId",
    element: <><Nav/><Candy/></>,
    errorElement: <Error/>
  },
  {
    path: "/createCandy/",
    element: <><Nav/><CreateCandy/></>,
    errorElement: <Error/>
  },
  {
    path: "/updateCandy/",
    element: <><Nav/><EditCandy/></>,
    errorElement: <Error/>
  },
  {
    path: "/deleteCandy/",
    element: <><Nav/><DeleteCandy/></>,
    errorElement: <Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
