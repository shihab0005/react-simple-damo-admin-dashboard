import React from 'react';
import Chart from '../../Components/chart/Chart';
import Featured from '../../Components/featured/Featured';
import Navbar from '../../Components/navbar/Navbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import DisplayTable from '../../Components/table/DisplayTable';
import Widgets from '../../Components/widgets/Widgets';
import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widgets type="user" />
                    <Widgets type="order" />
                    <Widgets type="earning" />
                    <Widgets type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart aspect={2 / 1} title="Last 6 Month (Revenue)" />
                </div>

                <div className="listContainer">
                    <div className="listTitle">
                        Latest Transactions
                    </div>
                    <DisplayTable />
                </div>

            </div>
        </div>
    );
};

export default Home;