import React from 'react';
import "./MainScreen.css";
import Poster from '../../Components/Poster/Poster';
import ChartComponent from '../../Components/Chart/ChartComponent';
import PieChart from '../../Components/PieChart';
import ScheduleInfo from '../../Components/ScheduleInfo/ScheduleInfo';
import PieDetails from '../../Components/PieDetails/PieDetails';

const MainScreen = () => {
  return (
    <div className="app">
      <div className="navbar">
        <div>
            <div className='board-text'>Board.</div>
            <ul>
                <li className='dashboard'>
                    <img className='nav-img' src='dashboard_icon.png' /> 
                    Dashboard
                </li>
                <li className='nav-text'><img className='nav-img' src='transaction_icon.png' /> Transactions</li>
                <li className='nav-text'><img className='nav-img' src='schedule_icon.png' /> Schedules</li>
                <li className='nav-text'><img className='nav-img' src='user_icon.png' /> Users</li>
                <li className='nav-text'><img className='nav-img' src='setting_icon.png' /> Settings</li>
            </ul>
        </div>
        <div>
            <ul>
                <li className='bottom-nav'>Help</li>
                <li className='bottom-nav'>Contact Us</li>
            </ul>
        </div>
      </div>
      <div className="content">

        <div className="row1">
          <div className='right-dashboard'>Dashboard</div>
          <div className='upper-content'>

          <form className='search'>
            <input className='search-text' type="search" placeholder="Search..." />
            <button type="submit">Search</button>
          </form>

            <img className='notification' src='notification.png' />
            <img className='user-img' src='user.png' />
          </div>
        </div>

        <div className="row2">
          <Poster theme={"#DDEFE0"} count={"$2,129,430"}  text={"Total Revenues"} icon={"revenue"}/>
          <Poster theme={"#F4ECDD"} count={"1,520"}  text={"Total Transactions"} icon={"transaction"}/>
          <Poster theme={"#EFDADA"} count={"9,721"}  text={"Total Likes"} icon={"likes"}/>
          <Poster theme={"#DEE0EF"} count={"892"}  text={"Total Users"} icon={"followers"}/>
        </div>
        <div className="row3">
          <div className='chart-info'>
            <div className='activity-div'>
              <div className='activity-text'>Activities</div>
              <div className='activity-date'>May - June 2021</div>
            </div>
            <ul className='chart-markup' >
              <li className='guest-li'>Guest</li>
              <li className='users-li'>Users</li>
            </ul>
          </div>
          <ChartComponent />
        </div>

        <div className='row4'>
          <div className='card1'>
            <div className='pie-title'>
              <div className='pie-heading'>
                Top Products
              </div>
              <div className='pie-head-date'>
              May - June 2021
              </div>
            </div>
            <div className='pie-content'>
              <PieChart />
              <div className='pie-details'>
                <PieDetails title={"Basic Trees"} pointcolor={"#98D89E"} percentage={55}/>
                <PieDetails title={"Custom Short Pants"} pointcolor={"#F6DC7D"} percentage={31} />
                <PieDetails title={"Super Hoodies"} pointcolor={"#EE8484"} percentage={14} />
              </div>
            </div>
          </div>
          <div className='card2'>
            <div className='schedule-box'>
              <div className='schedule-title'>
                Today’s schedule
              </div>
              <div className='see-all'>
              See All 
              </div>
            </div>
            <ScheduleInfo title={"Meeting with suppliers from Kuta Bali"} bordercolor={"#9BDD7C"} time={"14.00-15.00"} location={"at Sunset Road, Kuta, Bali "} />
            <ScheduleInfo title={"Check operation at Giga Factory 1"} location={"at Central Jakarta "} time={"18.00-20.00"} bordercolor={"#6972C3"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
