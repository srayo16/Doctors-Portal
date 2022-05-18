import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase.init';
import UseAdmin from '../../Hook/UseAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = UseAdmin(user);
    return (
        <div>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h1 className='text-center font-bold text-purple-500 text-2xl'>Welcome to your Dashboard</h1>
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 mt-5 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Appointments</Link></li>
                        <li><Link to='/dashboard/review'>My Review</Link></li>
                        <li><Link to='/dashboard/history'>My History</Link></li>
                        {admin && <>
                            <li><Link to='/dashboard/users'>Users</Link></li>
                            <li><Link to='/dashboard/adddoctor'>Add a Doctor</Link></li>
                            <li><Link to='/dashboard/managedr'>Manage Doctors</Link></li>
                        </>}
                    </ul>

                </div>

            </div>

        </div>
    );
};

export default Dashboard;