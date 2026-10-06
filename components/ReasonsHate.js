const reasons = [
  "Because somehow every small conversation has the potential to become an argument. Honestly, we're too talented at this. 😂",
  "Because sometimes you understand everyone except me. Like... hello? I'm literally right here. 😤",
  "Because your smoking and drinking habits are definitely NOT winning any points with me. Consider this your reminder. 😑",
  "Because sometimes you talk so aggressively, I genuinely wonder if we're having a conversation or arguing a court case. 😂",
  "Because your short temper has absolutely no patience... especially when I'm trying to explain something to you. 😤",
  "Because apparently everyone else's opinion gets VIP entry before mine. And then you wonder why I'm angry. 😑",
  "Because comparing me with someone else is the fastest way to unlock my angry mode. Please don't test it. 😂",
  "Because you somehow manage to do exactly what you want, while conveniently forgetting the one thing I asked you to do. 😤",
  "Because sometimes I have to explain the same thing 27 times before you finally understand what I meant. 😂",
  "Because you can annoy me, irritate me, make me angry, and test my patience like nobody else... and somehow, you're still my favorite idiot. Unfortunately, I love you. ❤️"
];

export default function ReasonsHate() {
  return (
    <section
      className="hate-section"
      id="reasons-hate"
    >
      <div className="hate-container">

        <div className="hate-heading">
          <p className="section-label">
            Okay... now the honest part
          </p>

          <h2>
            Reasons why
            <span>I "hate" you.</span>
          </h2>

          <p>
            Don't get too excited. This list is mostly
            for dramatic purposes... but you know
            there's some truth in it. 😤
          </p>
        </div>

        <div className="hate-list">
          {reasons.map((reason, index) => (
            <div
              className="hate-card"
              key={index}
            >
              <span className="hate-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="hate-icon">
                😤
              </span>

              <p>{reason}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}