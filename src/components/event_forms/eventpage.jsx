import React from "react";
import "./style.css";

function EventPage(props) {
  return (
    <section className="event-page1">
      {/* Video Background */}
      <div className="video-container">
        <video autoPlay muted loop className="background-video">
          <source src={props.videoLink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlaying content on the video */}
        <div className="video-overlay">
          <h1 className="event-heading1">{props.eventName}</h1>
          <p className="event-description">{props.eventDescription}</p>
        </div>
      </div>

      {/* Event Details */}
      <div className="event-details content1">
        <div>
          <span className="detail-label">Event Venue:</span>
          <span className="detail-value">{props.eventVenue}</span>
        </div>
        <div>
          <span className="detail-label">Entry Fee:</span>
          <span className="detail-value">{props.entryFee}</span>
        </div>
        <div>
          <span className="detail-label">Prize Pool:</span>
          <span className="detail-value">{props.prizePool}</span>
        </div>
        <div>
          <span className="detail-label">Date:</span>
          <span className="detail-value">{props.eventDate}</span>
        </div>

        {/* Register Button */}
        <div className="register-container">
          <button
            className="register-btn"
            onClick={() => (window.location.href = props.googleFormLink)}
          >
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default EventPage;
