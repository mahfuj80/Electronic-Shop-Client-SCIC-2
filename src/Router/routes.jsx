import { createBrowserRouter } from 'react-router-dom';
import Error from '../Pages/Error/Error';
import UserLayout from '../Layouts/UserLayout/UserLayout';
import Product from '../Pages/Product/Product';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Loagin/Login';
import SignUp from '../Pages/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <Product />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/about',
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
