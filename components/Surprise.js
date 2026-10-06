"use client";

import { useState } from "react";

export default function Surprise() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="surprise-section" id="surprise">
      <div className="surprise-container">

        {!opened ? (
          <>
            <p className="section-label">
              One last little surprise
            </p>

            <h2>
              I saved
              <span>something for you.</span>
            </h2>

            <p className="surprise-intro">
              Because a birthday website for my favorite
              person obviously needed one more surprise.
            </p>

            <button
              className="surprise-button"
              onClick={() => setOpened(true)}
            >
              <span>Open your surprise</span>
              <span className="surprise-arrow">→</span>
            </button>
          </>
        ) : (
          <div className="surprise-reveal">

            <div className="surprise-icon">
              ♡
            </div>

            <p className="section-label">
              Just for you
            </p>

            <h2>
              You are
              <span>my favorite person.</span>
            </h2>

            <div className="surprise-divider">
              <span></span>
              <span>✦</span>
              <span></span>
            </div>

            <p className="surprise-message">
              If I could give you one thing for your birthday,
              it would be the ability to see yourself through
              my eyes — because then you'd finally understand
              just how special you are to me.
            </p>

            <p className="surprise-message">
              You're the person I want to laugh with,
              argue with, annoy, travel with, make memories
              with, and somehow keep choosing again and again.
            </p>

            <p className="surprise-message">
              So here's my little birthday wish for you:
              may this year bring you everything you've been
              hoping for — and may I be there for as many of
              those moments as possible.
            </p>

            <p className="surprise-special">
              Happy Birthday, my idiot. ❤️
            </p>

            <div className="surprise-final-heart">
              ♡
            </div>

            <button
              className="surprise-back-button"
              onClick={() => setOpened(false)}
            >
              ← Go back
            </button>

          </div>
        )}

      </div>
    </section>
  );
}