import React, {useState} from "react";
import { getMonthData } from "../calendar";

const { DateTime } = require("luxon");

const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const monthNames = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

export default function Calendar() {
    const [currentDate, setCurrentDate] = useState(DateTime.now());
  
    console.log(getMonthData(currentDate));
  
    return (
      <div className="calendar">
        <header className="headerCalendar">
          <button className="buttonBack"
            onClick={() =>
              setCurrentDate((prevDate) => prevDate.minus({ month: 1 }))
            }
          >
            {"<"}
          </button>
          <div> {
            currentDate.month
            }
            </div>
          <div> {
            currentDate.year
            }
            </div>
  
          <button className="buttonNext"
            onClick={() =>
              setCurrentDate((prevDate) => prevDate.plus({ month: 1 }))
            }
          >
            {">"}
          </button>
        </header>
  
        <table className="days">
          <thead className="nameDays">
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
  