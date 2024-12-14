import React, { useContext } from 'react';
import { AuthContext } from '../../Authentication/Authentication';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, handleLogout, setUser } = useContext(AuthContext);
    // console.log(user);
    const logoutHandler = () => {
        handleLogout()
            .then(res => {
                Swal.fire({
                    title: "Logout Successfully",
                    icon: 'success'
                })
                setUser(null);
                navigate('/login');
            })
            .catch(error => {
                const errorCode = error.code.split("auth/")[1];
                const formattedError = errorCode
                    .split("-")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");
                toast.error(formattedError);
            })

    }

    const links = <>
        <NavLink to={'/'}
            className="hover:text-[#4b4bed] text-black font-[700] text-[14px] cursor-pointer">
            Home
        </NavLink>
        <NavLink to={'/all-visas'}
            className="hover:text-[#4b4bed] text-black font-[700] text-[14px] cursor-pointer">
            All visas
        </NavLink>
        <NavLink to={'/add-visa'}
            className="hover:text-[#4b4bed] text-black font-[700] text-[14px] cursor-pointer">
            Add Visa
        </NavLink>
        <NavLink to={'/user-added-visas'}
            className="hover:text-[#4b4bed] text-black font-[700] text-[14px] cursor-pointer">
            My added visas
        </NavLink>
        <NavLink to={'/user-applications'}
            className="hover:text-[#4b4bed] text-black font-[700] text-[14px] cursor-pointer">
            My Visa applications
        </NavLink>
        {
            user?.email ?
                <>
                    <NavLink to={'/my-profile'}
                        className="hover:text-[#4b4bed] text-black font-[700] text-[14px] cursor-pointer mr-2">
                        My Profile
                    </NavLink>
                    <Link onClick={logoutHandler}
                        className="hover:text-[#4b4bed] text-black font-[700] text-[14px] cursor-pointer">
                        Logout
                    </Link>

                </> :
                <>
                    <NavLink to={'/register'}
                        className="hover:text-[#4b4bed] text-black font-[700] text-[14px] cursor-pointer mr-2">
                        Register
                    </NavLink>
                    <NavLink to={'/login'}
                        className="hover:text-[#4b4bed] text-black font-[700] text-[14px] cursor-pointer">
                        Login
                    </NavLink>
                </>
        }
        <NavLink
            className="flex gap-2 justify-center items-center text-[14px]">
            {user &&
                <Link to={'/my-profile'} title={`${user.displayName}`}>
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                            <img src={user && user?.photoURL} />
                        </div>
                    </div>
                </Link>}
        </NavLink>
    </>
    return (
        <div>
            <div className='rounded-lg border-2 backdrop-blur-sm bg-transparent'>
                <nav>
                    <div className="navbar text-black">
                        <div className="navbar-start animate__animated animate__fadeInLeft">
                            <Link to={'/'}><h2 className='text-black font-bold text-3xl'>VisaSphere</h2></Link>
                        </div>
                        <div className="navbar-end">
                            <div className="lg:block hidden animate__animated animate__fadeInRight">
                                <ul className="menu-horizontal p-2 space-x-3 items-center justify-center">
                                    {links}
                                </ul>
                            </div>
                            <div className="dropdown">
                                <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex="0"
                                    className="menu menu-sm dropdown-content bg-[#00000050] rounded-box z-[1] mt-3 w-52 p-2 shadow right-0">
                                    {links}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;