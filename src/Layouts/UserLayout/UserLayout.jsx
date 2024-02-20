import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Shared/Navbar/Navbar';
import Footer from '../../components/Shared/Footer/Footer';

const UserLayout = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default UserLayout;
