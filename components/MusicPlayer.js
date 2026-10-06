"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/birthday-song.mp3"
        loop
        onEnded={() => setPlaying(false)}
      />

      <button
        className={`music-player ${playing ? "playing" : ""}`}
        onClick={toggleMusic}
        aria-label={playing ? "Pause music" : "Play music"}
      >
        <span className="music-icon">
          {playing ? "❚❚" : "♫"}
        </span>

        <span className="music-text">
          {playing ? "Playing..." : "Play our song"}
        </span>
      </button>
    </>
  );
}