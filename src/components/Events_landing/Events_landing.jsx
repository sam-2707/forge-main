import React from "react";
import "./Events_landing.css";

export default function EventsLanding() {
  return (
    <div className="about-page">
      <section className="articles">
        {/* New DASTAAN Gaming Tournament Events */}
        <article>
          <div className="article-wrapper dastaan-event">
            <figure>
              <img src="valo_gif.gif" alt="FORGE X DASTAAN VALORANT Tournament" />
            </figure>
            <div className="article-body">
              <h2>FORGE X DASTAAN GAMING TOURNAMENT - VALORANT</h2>
              <p>
                An electrifying esports showdown featuring 32 elite teams in double elimination format. 
                Online matches from Oct 1-10, 2025, with offline semi-finals and finals at Amrita Vishwa Vidyapeetham, Bengaluru.
                Registration Fee: ₹500 per team.
              </p>
              <a href="https://dastaan.ulsav.com/e/forge-x-dastaan-gaming-tournament-valorant" className="read-more" target="_blank" rel="noopener noreferrer">
                Register-now
                <span className="sr-only">FORGE X DASTAAN VALORANT Tournament</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>

        <article>
          <div className="article-wrapper dastaan-event">
            <figure>
              <img src="giphy.gif" alt="FORGE X DASTAAN Free Fire Tournament" />
            </figure>
            <div className="article-body">
              <h2>FORGE X DASTAAN GAMING TOURNAMENT - FREE FIRE</h2>
              <p>
                64 elite teams battle in Round Robin elimination format. 
                Online league matches from Oct 1-10, 2025, with offline semi-finals and finals at Amrita Vishwa Vidyapeetham, Bengaluru.
                Registration Fee: ₹500 per team.
              </p>
              <a href="https://dastaan.ulsav.com/e/forge-x-dastaan-gaming-tournament-free-fire" className="read-more" target="_blank" rel="noopener noreferrer">
                Register-now
                <span className="sr-only">FORGE X DASTAAN Free Fire Tournament</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>

        <article>
          <div className="article-wrapper dastaan-event">
            <figure>
              <img src="pubg_gif.gif" alt="FORGE X DASTAAN BGMI Tournament" />
            </figure>
            <div className="article-body">
              <h2>FORGE X DASTAAN GAMING TOURNAMENT - BGMI</h2>
              <p>
                Elite teams compete in an intense BGMI tournament format. 
                Online matches from Oct 1-10, 2025, with offline semi-finals and finals at Amrita Vishwa Vidyapeetham, Bengaluru.
                Registration Fee: ₹500 per team.
              </p>
              <a href="https://dastaan.ulsav.com/e/forge-x-dastaan-gaming-tournament-bgmi" className="read-more" target="_blank" rel="noopener noreferrer">
                Register-now
                <span className="sr-only">FORGE X DASTAAN BGMI Tournament</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>

        {/* Flagship Events Section - Coming Next Year */}
        <div className="flagship-events-section">
          <h3 className="flagship-title">Flagship Events - Coming Next Year</h3>
          
          <article>
            <div className="article-wrapper flagship-event-greyed">
              <figure>
                <img src="valo_gif.gif" alt="Valorant Tournament" />
              </figure>
              <div className="article-body">
                <h2>VALORANT</h2>
                <p>
                  Join us for an action-packed intercollege Valorant tournament
                  with big cash prizes up for grabs! Test your skills against
                  other college teams in intense gameplay that rewards strategy
                  and teamwork. Don't miss out on this thrilling gaming event!
                </p>
                <div className="read-more disabled">
                  Coming Next Year
                  <span className="sr-only">about this is some title</span>
                </div>
              </div>
            </div>
          </article>

          <article>
            <div className="article-wrapper flagship-event-greyed">
              <figure>
                <img src="fifa_gif.gif" alt="FIFA Tournament" />
              </figure>
              <div className="article-body">
                <h2>FIFA</h2>
                <p>
                  Experience the excitement of football on the virtual field! Join
                  our intercollege FIFA tournament and compete for thrilling cash
                  prizes. Register now and show off your skills in this epic
                  gaming event!
                </p>
                <div className="read-more disabled">
                  Coming Next Year
                  <span className="sr-only">about this is some title</span>
                </div>
              </div>
            </div>
          </article>

          <article>
            <div className="article-wrapper flagship-event-greyed">
              <figure>
                <img src="pubg_gif.gif" alt="BGMI Tournament" />
              </figure>
              <div className="article-body">
                <h2>BGMI</h2>
                <p>
                  Join our BGMI intercollege tournament and win exciting cash
                  prizes! Show off your mobile gaming skills and battle it out
                  with players from other colleges. Don't miss this chance to be
                  a champion!
                </p>
                <div className="read-more disabled">
                  Coming Next Year
                  <span className="sr-only">about this is some title</span>
                </div>
              </div>
            </div>
          </article>

          <article>
            <div className="article-wrapper flagship-event-greyed">
              <figure>
                <img src="giphy.gif" alt="Free Fire Tournament" />
              </figure>
              <div className="article-body">
                <h2>Free Fire</h2>
                <p>
                  Get ready for an adventure like no other! Our treasure hunt event
                  uses cutting-edge AR technology to create an immersive
                  experience. Solve clues, discover hidden treasures, and compete
                  with friends in this unique and thrilling adventure. Join us
                  now!
                </p>
                <div className="read-more disabled">
                  Coming Next Year
                  <span className="sr-only">about this is some title</span>
                </div>
              </div>
            </div>
          </article>

          <article>
            <div className="article-wrapper flagship-event-greyed">
              <figure>
                <img src="hackathon_gif.gif" alt="Hackathon" />
              </figure>
              <div className="article-body">
                <h2>Hackathon</h2>
                <p>
                  Join the gaming event's VR/AR hackathon to create innovative
                  experiences using cutting-edge technology and expert mentorship.
                  Win exciting prizes and explore the potential of VR/AR.
                </p>
                <div className="read-more disabled">
                  Coming Next Year
                  <span className="sr-only">about this is some title</span>
                </div>
              </div>
            </div>
          </article>

          <article>
            <div className="article-wrapper flagship-event-greyed">
              <figure>
                <img src="gaming_arena.gif" alt="Gaming Arena" />
              </figure>
              <div className="article-body">
                <h2>Gaming-Arena</h2>
                <p>
                  Welcome to Console Crusade, the ultimate gaming arena for console
                  and PC enthusiasts! Get ready to embark on an epic gaming
                  adventure with titles like Uncharted, Forza 5, Mortal Kombat, and
                  Spider-Man. Join us for an unforgettable gaming experience and
                  compete with fellow gamers for glory!
                </p>
                <div className="read-more disabled">
                  Coming Next Year
                  <span className="sr-only">about this is some title</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
