import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Layout from '../layout/Layout';
import Dashboard from '../layout/Dashboard';
import Card from '../components/card';
import { getWeekDayName, getMonthDayName } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Plans = (props) => {

    /*
        дата
        месяц
        день недели
        доход
        расход
        накопления
        остаток по кредиту
    */

    const [calendar, setCalendar] = useState([]);
    const [curMonthName, setCurMonthName] = useState("");

    useEffect(() => {
        let currentMonthName = getMonthDayName( moment().month() );        
        let currentMonthEnd = moment().endOf('month').date();
        let today = moment().date();
        let startWeekDay = moment().startOf('month').day();
        let prevMonth = moment().subtract(today, 'days');
        let prevMonthEndDay = prevMonth.date();
        let prevMonthName = getMonthDayName( prevMonth.month() );
        let startCalendarDate = prevMonthEndDay - startWeekDay + 2;

        const tempCalendar = [];
        let week = 0;
        tempCalendar[week] = [];

        for (let i = 1; i < startWeekDay; i++) {
            tempCalendar[week].push({
                weekDay: i,
                month: prevMonthName,
                monthDay: startCalendarDate
            });

            startCalendarDate++;
        }

        let weekDay = moment().startOf('month').day();
        let SUNDAY = 7;        

        for (let i = 1; i <= currentMonthEnd; i++) {
            tempCalendar[week].push({
                weekDay: weekDay,
                month: currentMonthName,
                monthDay: i
            });

            if (weekDay < SUNDAY) weekDay++;
            else {
                weekDay = 1; 
                week++;
                tempCalendar[week] = [];
            }
        }

        if (weekDay < SUNDAY) {
            let nextMonth = moment().add(1, 'months');
            let nextMonthName = getMonthDayName( nextMonth.month() );
            let monthDay = 1;

            for (let i = weekDay; weekDay <= SUNDAY; weekDay++) {
                tempCalendar[week].push({
                    weekDay: weekDay,
                    month: nextMonthName,
                    monthDay: monthDay
                });
                
                monthDay++;
            }
        }

        setCalendar(tempCalendar);
        setCurMonthName(currentMonthName);

        // console.log("tempCalendar = ", tempCalendar);        
    }, []);

    const renderCalendar = () => {
        return calendar.map(week => {
            return week.map(day => {
                let classes = ["fc-day", "fc-widget-content"];
                if (day.month !== curMonthName) {
                    classes.push("fc-other-month");
                }

                if (day.weekDay === 1) {
                    return <><tr></tr><td className={classes.join(" ")}>
                        <span className="fc-day-number">{day.monthDay}</span>
                    </td></>;
                } else if (day.weekDay === 7) {
                    return <><td className={classes.join(" ")}>
                        <span className="fc-day-number">{day.monthDay}</span>
                    </td></>;
                } else {
                    return <td className={classes.join(" ")}>
                        <span className="fc-day-number">{day.monthDay}</span>
                    </td>;
                }
            });
        })
    }

    return (
        <Layout>
            <Dashboard pageTitle={"Планирование бюджета"}>
                <div className="container-fluid">
                    <div className="row">                        
                        <div className="col-md-3">
                            <div>Настройки</div>
                        </div>
                        <div className="col-md-9">
                            <div className="card card-primary">
                                <div className="card-body p-0">
                                    <div className="fc fc-ltr fc-unthemed">
                                        <div className="fc-toolbar fc-header-toolbar">
                                            <div className="fc-left">
                                                <div className="fc-button-group">
                                                    <button type="button" className="fc-prev-button fc-button" aria-label="prev">
                                                        <FontAwesomeIcon icon={faChevronLeft} />
                                                    </button>
                                                    <button type="button" className="fc-next-button fc-button" aria-label="next">
                                                        <FontAwesomeIcon icon={faChevronRight} />
                                                    </button>
                                                </div>
                                                <button type="button" className="fc-today-button fc-button fc-button-primary">today</button>
                                            </div>
                                            <div className="fc-center"><h2>{curMonthName} 2020</h2></div>

                                            <div className="fc-right">
                                                <div className="fc-button-group">
                                                    <button type="button" className="fc-dayGridMonth-button fc-button fc-button-active">month</button>
                                                    <button type="button" className="fc-timeGridWeek-button fc-button">week</button>
                                                    <button type="button" className="fc-timeGridDay-button fc-button">day</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fc-view-container">
                                        <div className="fc-view fc-dayGridMonth-view fc-dayGrid-view">
                                            <table className="">
                                                <thead className="fc-head">
                                                    <tr>
                                                        <td className="fc-head-container fc-widget-header">
                                                            <div className="fc-row fc-widget-header">

                                                                <table className="">
                                                                    <thead>
                                                                        <tr>                                                                            
                                                                            <th className="fc-day-header fc-widget-header fc-mon">
                                                                                <span>Пн</span>
                                                                            </th>
                                                                            <th className="fc-day-header fc-widget-header fc-tue">
                                                                                <span>Вт</span>
                                                                            </th>
                                                                            <th className="fc-day-header fc-widget-header fc-wed">
                                                                                <span>Ср</span>
                                                                            </th>
                                                                            <th className="fc-day-header fc-widget-header fc-thu">
                                                                                <span>Чт</span>
                                                                            </th>
                                                                            <th className="fc-day-header fc-widget-header fc-fri">
                                                                                <span>Пт</span>
                                                                            </th>
                                                                            <th className="fc-day-header fc-widget-header fc-sat">
                                                                                <span>Сб</span>
                                                                            </th>
                                                                            <th className="fc-day-header fc-widget-header fc-sun">
                                                                                <span>Вс</span>
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </thead>
                                                <tbody className="fc-body">
                                                    <tr>
                                                        <td className="fc-widget-content">
                                                            <div className="fc-day-grid">
                                                                <table className="">
                                                                    <tbody>
                                                                        {renderCalendar()}
                                                                    </tbody>
                                                                </table>                                                       
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dashboard>  
        </Layout>        
    );
}

export default Plans;