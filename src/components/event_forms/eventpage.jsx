import React, { useEffect, useRef, useState } from "react";
import "./style.css";

function EventPage(props) {
  const [showImage, setShowImage] = useState(true); // State to toggle between PNG and Video
  const [loading, setLoading] = useState(true); // State to handle video loading
  const videoRef = useRef(null); // Reference to control the video

  // useEffect to handle transitions from PNG to video after 5 seconds
  useEffect(() => {
    if (showImage) {
      const timer = setTimeout(() => {
        setShowImage(false); // Switch to video after 5 seconds
      }, 5000); // 5 seconds delay

      return () => clearTimeout(timer); // Cleanup the timer when component unmounts
    }
  }, [showImage]);

  // Video event listener for looping back to the PNG after video ends
  const handleVideoEnd = () => {
    setShowImage(true); // Switch back to PNG when the video finishes
  };

  // Video loading event
  const handleVideoLoad = () => {
    setLoading(false); // Set loading to false when video is ready
  };

  return (
    <section>
      {/* Video/Image Background */}
      <div className="video-container">
        {/* Transition between PNG and Video */}
        {showImage ? (
          <img
            src={props.pngImage} // PNG image
            alt="Event Teaser"
            className="background-image fade-in"
          />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop={false} // Do not loop, we want to switch back to the PNG
            className={`background-video fade-in ${loading ? "hidden" : ""}`}
            onEnded={handleVideoEnd} // Trigger transition back to PNG when video ends
            onCanPlay={handleVideoLoad} // Trigger when the video is ready to play
          >
            <source src={props.videoLink} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Loading Indicator */}
        {loading && <div className="loading-indicator">Loading...</div>}

        {/* Game Name Overlay on the Video */}
        <div className="video-overlay">
          <h1 className="event-heading1">{props.eventName}</h1>
        </div>
      </div>

      {/* Event Details and Description Container */}
      <div className="content1">
        {/* Event Details */}
        <div className="event-details">
          <p className="event-description">{props.eventDescription}</p>
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

        {/* Poster Section */}
        <div className="poster-container">
          <img src={props.posterImage} alt="Event Poster" />
        </div>
      </div>
    </section>
  );
}

export default EventPage;
