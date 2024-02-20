import { createBrowserRouter } from 'react-router-dom';
import Error from '../Pages/Error/Error';
import UserLayout from '../Layouts/UserLayout/UserLayout';
import Product from '../Pages/Product/Product';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';

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
    ],
  },
]);

export default router;
