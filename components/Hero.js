"use client";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-small-text">
          A little surprise for you
        </p>

        <h1>
          Happy Birthday
            <span>My Favorite Human</span>
        </h1>

        <p className="hero-name">
          Yuviii 😚💩
        </p>

        <p className="hero-description">
          The one who makes me laugh, drives me crazy, steals my peace, and somehow has my whole heart.
        </p>

        <a href="#message" className="scroll-button">
          <span>Scroll to your surprise</span>
          <span className="arrow">↓</span>
        </a>
      </div>

      <div className="floating-heart heart-1">♡</div>
      <div className="floating-heart heart-2">♡</div>
      <div className="floating-heart heart-3">♡</div>
      <div className="floating-heart heart-4">♡</div>
      <div className="floating-heart heart-5">♡</div>
    </section>
  );
}