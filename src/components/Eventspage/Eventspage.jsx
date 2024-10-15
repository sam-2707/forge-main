import React from 'react';
import './EventsPage.css'; // Make sure you have a CSS file for styling if needed

const EventPage = ({
  eventName,
  eventDescription,
  entryFee,
  eventVenue,
  prizePool,
  eventDate,
  googleFormLink
}) => {
  return (
    <div className="event-page">
      <h1>{eventName}</h1>
      <p>{eventDescription}</p>
      <p><strong>Entry Fee:</strong> {entryFee}</p>
      <p><strong>Venue:</strong> {eventVenue}</p>
      <p><strong>Prize Pool:</strong> {prizePool}</p>
      <p><strong>Date:</strong> {eventDate}</p>

      {/* Register Button */}
      <button
        className="register-btn"
        onClick={() => window.location.href = googleFormLink}
      >
        Register Now
      </button>
    </div>
  );
};

export default EventPage;
