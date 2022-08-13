import React, { useContext } from 'react';
import './navbar.scss'
import { Badge } from '@mui/material';
import { DarkModeContext } from '../../context/darkModeContext';
const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search....' />
                    <i className="ri-search-line"></i>
                </div>

                <div className="items">
                    <div className="item">
                        <i className="ri-global-line"></i>
                        English
                    </div>
                    <div className="item">
                        <i className="ri-moon-line" onClick={() => dispatch({ type: "DARK" })}></i>

                    </div>
                    <div className="item">
                        <i className="ri-fullscreen-exit-line"></i>

                    </div>

                    <div className="item">
                        <Badge badgeContent={12} color="primary">
                            <i className="ri-notification-3-fill"></i>
                        </Badge>


                    </div>
                    <div className="item">

                        <Badge badgeContent={1} color="primary">
                            <i className="ri-chat-4-line"></i>
                        </Badge>
                    </div>
                    <div className="item">
                        <i className="ri-list-unordered"></i>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;