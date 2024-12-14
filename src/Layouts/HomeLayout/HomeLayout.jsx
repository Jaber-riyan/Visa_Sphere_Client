import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom';
import VisaCard from '../../Components/VisaCard/VisaCard';

const HomeLayout = () => {
    const location = useLocation();
    // console.log(location);
    return (
        <div>
            <Helmet><title>Home | Visa Sphere</title></Helmet>
            <header className='sticky top-0 z-10 mb-10'>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;