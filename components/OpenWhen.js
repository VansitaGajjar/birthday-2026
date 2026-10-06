"use client";

import { useState } from "react";

const letters = [
  {
    title: "Open when you're missing me",
    message:
      "I know you probably miss me... or maybe you're just pretending you don't. 😂 Either way, remember that somewhere there's a girl who is probably missing you too, annoying you in her head, and waiting to talk to you. Until we meet again, think about all the crazy little memories we've made together. ♡",
  },

  {
    title: "Open when you're angry with me",
    message:
      "First of all... calm down. 😌 Second, remember that I am probably angry too. And third, no matter how stupid our argument is, I still don't want to stay angry with you for too long. So whenever you're ready, come back and talk to your favorite idiot. ❤️",
  },

  {
    title: "Open when you're having a bad day",
    message:
      "Today might be a terrible day, but it won't always feel this way. Take a breath, give yourself some time, and remember that you've already made it through difficult days before. And if that doesn't work... call me. I'll either make you feel better or annoy you until you forget why you were sad. 😂❤️",
  },

  {
    title: "Open when you need a smile",
    message:
      "Smile. Yes, right now. Don't argue with me. 😤 Your smile is one of my favorite things, and I refuse to let you forget that. Also, remember that the girl who loves you is probably thinking about you and smiling like an idiot right now. ♡",
  },

  {
    title: "Open when you want to know how much I love you",
    message:
      "More than I can explain in one message. More than all the arguments, teasing, laughter, memories, and little moments we've collected together. You became my person somewhere along the way, and I don't think my heart plans on changing its mind anytime soon. ❤️",
  },
];

export default function OpenWhen() {
  const [selectedLetter, setSelectedLetter] = useState(null);

  return (
    <section
      className="open-when-section"
      id="open-when"
    >
      <div className="open-when-container">

        <div className="open-when-heading">
          <p className="section-label">
            For another day
          </p>

          <h2>
            Open when
            <span>you need me.</span>
          </h2>

          <p>
            Little messages for the days when
            you need a reminder of us.
          </p>
        </div>

        <div className="letters-list">
          {letters.map((letter, index) => (
            <button
              className="letter-card"
              key={index}
              onClick={() => setSelectedLetter(letter)}
            >
              <span className="letter-icon">
                ✉
              </span>

              <span className="letter-title">
                {letter.title}
              </span>

              <span className="letter-arrow">
                →
              </span>
            </button>
          ))}
        </div>

        {selectedLetter && (
          <div className="letter-popup">

            <div className="letter-popup-card">

              <button
                className="letter-close"
                onClick={() => setSelectedLetter(null)}
                aria-label="Close message"
              >
                ×
              </button>

              <div className="popup-heart">
                ♡
              </div>

              <p className="section-label">
                A little message
              </p>

              <p>
                {selectedLetter.message}
              </p>

              <button
                className="popup-close-button"
                onClick={() => setSelectedLetter(null)}
              >
                Close
              </button>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}