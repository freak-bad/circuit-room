import React from 'react';
import Header from './Header';
import ImageSlider from './ImageSlider';
import CheckInOutCalendar from './CheckInOutCalendar';
import RoomAvailabilityCalendar from './RoomAvailabilityCalendar';
import TermsAndConditions from './TermsAndConditions';
import Footer from './Footer';
import BookNowButton from './BookNowButton'; // Import the Book Now button
// import '../App.css';

function Mix() {
  return (
    <div className="App">
      <div className="content-container">
        <Header />
        <ImageSlider />
        <div className="comment">
          Your Comfort Is Our Priority!
        </div>
        <br />
        <div className="room-heading">
          <h2 className="room-booking-heading">Check Availability</h2>
        </div>
        <CheckInOutCalendar />
        <br /><br />
        <div className="payment-methods-comment">
          All Payment Methods Accepted.
        </div>
        <br />
        <div className="button-container"> {/* Add this div for centering */}
          <BookNowButton /> {/* Add the Book Now button here */}
        </div>
        <br /><br />
        <RoomAvailabilityCalendar />
        <br />
        <TermsAndConditions />
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default Mix;
