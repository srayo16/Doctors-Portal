import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('AccessToken');
        toast('Logged Out');
    };
    const navItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li>{user ? <button className="btn btn-ghost" onClick={logout}>Log Out</button> : <Link to='/login'>Login</Link>}</li>
    </>

    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case mr-20 text-xl">Doctors Portal</a>
            </div>
            <div className="navbar-center hidden ml-28 xl:ml-96  lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItems}
                </ul>
                {/* <ToastContainer /> */}
            </div>

            <div className="navbar-end">
                <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;