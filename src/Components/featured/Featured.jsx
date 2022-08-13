import React from 'react';
import './featured.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title">Totoal Revenue</h1>
                <i className="ri-more-2-fill"></i>
            </div>
            <div className="bottom">
                <div className="featuredChart" >
                    <CircularProgressbar value={78} text={"78%"} strokeWidth={10} />;
                </div>
                <p className="title">Total Sell Made Today</p>
                <p className="amount">$499</p>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit</p>

                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <i className="ri-arrow-up-s-line"></i>
                            <div className="resultAmount">$120.6k</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult negative">
                            <i className="ri-arrow-down-s-line"></i>
                            <div className="resultAmount">$12.6k</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <i className="ri-arrow-up-s-line"></i>
                            <div className="resultAmount">$98.6k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;