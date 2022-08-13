import React from 'react';
import Chart from '../../Components/chart/Chart';
import Navbar from '../../Components/navbar/Navbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import DisplayTable from '../../Components/table/DisplayTable';
import './Single.scss';

const Single = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="itemImg" />

                            <div className="details">
                                <h2 className="itemTitle">John Cena</h2>
                                <div className="detailItem">
                                    <span className="itemKey">Email : </span>
                                    <span className="itemValue">john@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone : </span>
                                    <span className="itemValue">+088 124537 9809</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address : </span>
                                    <span className="itemValue">H#15, R#11,Nikunja-1,Khilkhet</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country : </span>
                                    <span className="itemValue">Bangladesh</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="right"><Chart aspect={3 / 1} title="User Spending (Last 6 Month)" /></div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transiction</h1>
                    <DisplayTable />
                </div>
            </div>
        </div>
    );
};

export default Single;