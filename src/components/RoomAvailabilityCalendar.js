import React from 'react';
import './RoomAvailabilityCalendar.css'; // Import your CSS file

const RoomAvailabilityCalendar = () => {
  const today = new Date();
  const month = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();
  
  const dates = [];
  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date);
  }

  const roomAvailability = {
    1: [true, false, true, true, false, true, true, false, true, false, false, true, true, false],
    2: [false, true, true, false, true, false, true, true, false, true, true, false, true, true],
    3: [true, true, false, true, false, true, false, true, true, false, true, true, false, true],
    4: [true, false, true, true, false, true, true, false, true, false, false, true, true, false],
    5: [false, true, true, false, true, false, true, true, false, true, true, false, true, true],
    6: [true, true, false, true, false, true, false, true, true, false, true, true, false, true],
  };

  return (
    <div className="room-availability-calendar">
      <h2 className="calendar-title">{`${month} ${year}`}</h2>
      <div className="calendar-wrapper">
        <div className="calendar-table">
          <div className="room-header">Room No.</div>
          {dates.map((date, index) => (
            <div key={index} className="date-header">
              {date.toLocaleString('default', { weekday: 'short' })}
            </div>
          ))}
          {Object.keys(roomAvailability).map(room => (
            <>
              <div key={room} className="room-item">Room {room}</div>
              {roomAvailability[room].map((available, index) => (
                <div key={index} className="dot-container">
                  <div className="dot" style={{
                    backgroundColor: available ? 'green' : 'red'
                  }}></div>
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomAvailabilityCalendar;
