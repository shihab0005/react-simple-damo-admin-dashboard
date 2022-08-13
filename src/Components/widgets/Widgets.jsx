import React from 'react';
import './widgets.scss';

const Widgets = ({ type }) => {

    let data;
    const amount = 200;
    const diff = 20;
    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all Users",
                icon: <i className="ri-user-3-line outer"></i>

            };
            break;

        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all Orders",
                icon: <i className="ri-shopping-cart-fill outer"></i>

            };
            break;

        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net Earning",
                icon: <i className="ri-money-dollar-circle-line outer"></i>

            };
            break;

        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See Details",
                icon: <i className="ri-currency-line outer"></i>

            };

            break;

        default:
            break;
    }
    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <i className="ri-arrow-up-s-line"></i>
                    {diff}%</div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widgets;