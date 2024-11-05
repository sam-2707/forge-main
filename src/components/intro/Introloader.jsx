import React from "react";
import "./Introloader.css"; // Link the updated CSS

export default function Introloader() {
  return (
    <div className="scroll">
      <h1 className="scroll-indi ff-tc">Scroll down :)</h1>
      
      {/* Main intro section */}
      <section className={`intro-1 ff-tc`}>
        {/* Main circle box with hover effects */}
        <div className="intro-box">
          <div className="intro-btn"></div>
          <div className="intro-btn-txt">GG</div>
        </div>
      </section>
    </div>
  );
}
