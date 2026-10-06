const reasons = [
  "Because no matter how badly we argue, you're still the one I want to talk to five minutes later. ❤️",
  "Because you somehow make me laugh when I'm trying my best to stay mad at you. Honestly, it's unfair. 😂",
  "Because even when you don't understand what I'm saying, you somehow know exactly what I need. ❤️",
  "Because you've held my hand through some of my hardest days and made them feel a little easier.",
  "Because with you, even the simplest moments become memories I never want to forget.",
  "Because you're my peace, my problem, my favorite distraction, and my favorite person.",
  "Because no matter how much I annoy you, you still keep choosing me... you might be a little obsessed. 😉",
  "Because I can look at you doing absolutely nothing and still think, “Yep... that's my person.”",
  "Because somewhere between the fights, teasing, laughter, and chaos, you became my favorite person and my favorite reason to smile. ❤️",
  "Because out of everyone in the world, my heart chose you. And honestly, it has pretty good taste. 😉❤️"
];

export default function Reasons() {
  return (
    <section className="reasons-section" id="reasons">
      <div className="reasons-container">

        <div className="reasons-heading">
          <p className="section-label">
            A few little things
          </p>

          <h2>
            Reasons why
            <span>I love you.</span>
          </h2>

          <p>
            I could probably write a hundred of these,
            but these are some of the reasons you became
            my favorite person.
          </p>
        </div>

        <div className="reasons-list">
          {reasons.map((reason, index) => (
            <div
              className="reason-card"
              key={index}
            >
              <span className="reason-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="reason-heart">
                ♡
              </span>

              <p>{reason}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}