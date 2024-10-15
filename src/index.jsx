import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Bgmi from "./components/event_forms/bgmi";
import EventPage from "./components/event_forms/eventpage";
import Fifa from "./components/event_forms/fifa";
import Freefire from "./components/event_forms/freefire";
import Hackathon from "./components/event_forms/hackathon";
import SuccussPage from "./components/event_forms/sucess";
import Valorant from "./components/event_forms/valorant";

function Routee() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/valorant-registration" element={<Valorant />} />
          <Route path="/fifa-registration" element={<Fifa />} />
          <Route path="/bgmi-registration" element={<Bgmi />} />
          <Route path="/succuss" element={<SuccussPage />} />
          <Route path="/hackathon-registration" element={<Hackathon />} />
          <Route path="/freefire-registration" element={<Freefire />} />

          {/* Valorant Event */}
          <Route
            path="/valorant"
            element={
              <EventPage
                eventName="Valorant"
                eventDescription="Ready to put your skills to the test? Join our Valorant gaming tournament and compete with the best players in the game! With exciting prizes, thrilling matches, and fierce competition, this is the ultimate event for serious gamers. Register now and show us what you've got!"
                entryFee="500/-"
                eventVenue="AI Lab - 5th floor, from 6:00 P.M."
                prizePool="9000/-"
                eventDate="19/10/2024 - 20/10/2024"
                googleFormLink="https://forms.gle/DeKd7kWPbSQ3RPT58"
                videoLink="/valo.mp4"  // Valorant form link
              />
            }
          />

          {/* FIFA Event */}
          <Route
            path="/fifa"
            element={
              <EventPage
                eventName="Fifa"
                eventDescription="Are you ready to take your FIFA skills to the next level? Join our FIFA gaming tournament and compete against the best players in the game! With thrilling matches, intense gameplay, and exciting prizes, this is the ultimate event for soccer fans and gamers alike. Register now and show us your skills!"
                entryFee="100/-"
                eventVenue="Computer Science Lab - 5th floor, from 6:00 P.M."
                prizePool="3000/-"
                eventDate="19/10/2024 - 20/10/2024"
                googleFormLink="https://forms.gle/HcXi26DXqbUzeKEo7" 
                videoLink="/meh.mp4" // FIFA form link
              />
            }
          />

          {/* BGMI Event */}
          <Route
            path="/pubg"
            element={
              <EventPage
                eventName="BGMI"
                eventDescription="Get ready for the ultimate battle royale experience! Join our BGMI gaming tournament and compete against top players for a chance to win amazing prizes. With intense gameplay, adrenaline-pumping action, and skilled competitors, this event is not to be missed. Register now and enter the battlegrounds!"
                entryFee="400/-"
                eventVenue="Computer Science Lab - 5th floor, from 6:00 P.M."
                prizePool="14000/-"
                eventDate="19/10/2024 - 20/10/2024"
                googleFormLink="https://forms.gle/8oJfwdWny5Nn4JpB6"
                videoLink="/pabg.mp4"  // BGMI form link
              />
            }
          />

          {/* FreeFire Event */}
          <Route
            path="/freefire"
            element={
              <EventPage
                eventName="Free Fire"
                eventDescription="Get ready for the ultimate battle royale experience! Join our FreeFire gaming tournament and compete against top players for a chance to win amazing prizes. With intense gameplay, adrenaline-pumping action, and skilled competitors, this event is not to be missed. Register now and enter the battlegrounds!"
                entryFee="400/-"
                eventVenue="Computer Science Labs - 5th floor, from 6:00 P.M."
                prizePool="14000/-"
                eventDate="19/10/2024 - 20/10/2024"
                googleFormLink="https://docs.google.com/forms/d/e/1FAIpQLSfcKEf07sXtQ69F2l5LgBMBnrgXDEpRh0-zCUayxsh1BaCcGw/viewform?usp=sf_link" 
                videoLink="/ff.mp4" // FreeFire form link
              />
            }
          />

          {/* Hackathon Event */}
          <Route
            path="/hackathon"
            element={
              <EventPage
                eventName="Hackathon"
                eventDescription="Join our VR/AR hackathon and take your skills to the next level! With cutting-edge technology and innovative challenges, this event is the ultimate opportunity to showcase your creativity and expertise. Network with like-minded professionals, develop amazing projects, and win prizes. Register now and join the future of technology!"
                entryFee="NADA"
                eventVenue="Krishna Hall - E-Block 1st floor. from 6:00 P.M."
                prizePool="10000/-"
                eventDate="19/10/2024 - 20/10/2024"
                googleFormLink="https://forms.gle/HackathonGoogleFormLink"  // Hackathon form link
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routee;
