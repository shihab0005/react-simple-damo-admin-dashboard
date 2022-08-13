import React, { useContext } from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext';
const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className='logo'>Dashdbard</span>
                </Link>

            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <i className="ri-dashboard-fill"></i>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>

                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <i className="ri-user-line"></i>
                            <span>Users</span>
                        </li>
                    </Link>

                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <i className="ri-store-line"></i>
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <i className="ri-bank-card-2-line"></i>
                        <span>Orders</span>  </li>
                    <li>
                        <i className="ri-truck-fill"></i>
                        <span> Delivery</span></li>
                    <p className="title">USEFULL</p>
                    <li>
                        <i className="ri-bar-chart-box-line"></i>
                        <span>Stats</span>
                    </li>
                    <li>
                        <i className="ri-notification-line"></i><span>Notifications</span>
                    </li>
                    <p className="title">SERVICES</p>
                    <li>
                        <i className="ri-hospital-line"></i>
                        <span>System health</span>
                    </li>
                    <li>
                        <i className="ri-earthquake-fill"></i>
                        <span>Logs</span> </li>
                    <li>
                        <i className="ri-settings-2-fill"></i>
                        <span> Settings</span></li>

                    <p className="title">USER</p>
                    <li>
                        <i className="ri-shield-user-fill"></i>
                        <span>Profile</span>  </li>
                    <li>
                        <i className="ri-logout-box-r-fill"></i>
                        <span> Logout</span></li>

                </ul>
            </div>

            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>

            </div>

        </div>
    );
};

export default Sidebar;