import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignInPage from './Components/Navbar/Sign-In/SignInPage';
import NotFoundPage from './Components/Navbar/NotFoundPage';
import SignUpPage from './Components/Navbar/Sign-Up/SignUpPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import PythonCodeEditor from './Components/PythonIDE/PythonCodeEditor';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/signin',
    element: <SignInPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/register',
    element: <SignUpPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/python_ide',
    element: <PythonCodeEditor />,
    errorElement: <NotFoundPage />
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
