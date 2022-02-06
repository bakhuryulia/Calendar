import React, {useState} from "react";
import { getMonthData } from "../calendar";

const { DateTime } = require("luxon");

const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const monthNames = [];

export default function Calendar() {
    const [currentDate, setCurrentDate] = useState(DateTime.now());
  
    console.log(getMonthData(currentDate));
  
    return (
      <div className="calendar">
        <header>
          <button
            onClick={() =>
              setCurrentDate((prevDate) => prevDate.minus({ month: 1 }))
            }
          >
            {"<"}
          </button>
  
          {/* <select
                ref={element => this.monthSelect = element}
                value={this.month}
                onChange={this.handleSelectChange}
            >
                {monthNames.map((name, index) =>
                    <option key={name} value={index}>{name}</option>
                )}
            </select> */}
  
          {/* <select
                ref={element => this.yearSelect = element}
                value={this.year}
                onChange={this.handleSelectChange}
            >
                {years.map(year =>
                    <option key={year} value={year}>{year}</option> 
                )}
            </select> */}
  
          <button
            onClick={() =>
              setCurrentDate((prevDate) => prevDate.plus({ month: 1 }))
            }
          >
            {">"}
          </button>
        </header>
  
        <table>
          <thead>
            <tr>
              {weekDays.map((name) => (
                <th key={name}>{name}</th>
              ))}
            </tr>
          </thead>
  
          <tbody>
            {Object.values(getMonthData(currentDate)).map((week, index) => (
              <tr key={index} className="week">
                {week.map((date, index) =>
                  date ? (
                    <td
                      key={index}
                      // className={classnames('day', {
                      //     'today': calendar.areEqual(date, currentDate),
                      //     'selected': calendar.areEqual(date, selectedDate)
                      // })}
                      // onClick={() => this.handleDayClick(date)}
                    >
                      {date}
                    </td>
                  ) : (
                    <td key={index} />
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  