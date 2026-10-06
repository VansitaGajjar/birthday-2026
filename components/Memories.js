const memories = [
  {
    number: "01",
    title: "The Most Unusual Beginning",
    image: "/images/memory-01.png",
    paragraphs: [
      <>
        We met back in school, and apparently,{" "}
        <strong>your idea of starting a friendship was cutting my
        waist-length hair</strong>{" "}
        during a running lecture because it was on your bench.
        Yes… you actually cut it all the way to my shoulders. 😂
      </>,
      <>
        And after doing that, we didn't even talk!
      </>,
      <>
        Then, 1.5 years later, we met again at{" "}
        <strong>Surat Ka Raja’s Ganapati pandal</strong> — and
        somehow, that became the beginning of <em>us</em>. ❤️
      </>,
      <>
        Who would've thought that the boy who once attacked my
        hair with a pair of scissors would eventually become{" "}
        <strong>the person I’d want beside me every year?</strong>
      </>,
      <>
        Now, visiting Surat Ka Raja together has become our little
        tradition — and apparently,{" "}
        <strong>neither of us is allowed to go there alone anymore.</strong>{" "}
        ❤️
      </>,
      <>
        Funny how you went from{" "}
        <strong>cutting my hair to stealing my heart.</strong> 😌💕
      </>,
    ],
  },

  {
    number: "02",
    title: "The Days I Couldn't Remember",
    image: "/images/memory-02.png",
    paragraphs: [
      <>
        When I was hospitalized with jaundice for 11 days, I barely
        remember those days. But I do know one thing —{" "}
        <strong>you came to see me every single day</strong>, even
        when I couldn’t open my eyes or even know that you were there.
      </>,
      <>
        Then came those 9 months of bed rest, when I wasn't supposed
        to go anywhere. But somehow,{" "}
        <strong>
          you convinced my family, found a way to sneak me out for
          movies, beach days, garba, or just a little fresh air
        </strong>{" "}
        whenever I needed a break.
      </>,
      <>
        You somehow turned a difficult time into some of my most
        beautiful memories.
      </>,
      <>
        Some memories are special because{" "}
        <strong>we remember them.</strong>
      </>,
      <>
        And some are even more special because{" "}
        <strong>
          you remember being there for me when I couldn't.
        </strong>{" "}
        ❤️
      </>,
    ],
  },

  {
    number: "03",
    title: "And Somehow, We're Still Us",
    image: "/images/memory-03.png",
    paragraphs: [
      <>
        We can have a full-blown fight one day, stop talking to
        each other, and then wake up the next morning like
        absolutely nothing happened.
      </>,
      <>
        And if we suddenly remember that we were{" "}
        <em>supposed</em> to be angry, it usually turns into,{" "}
        <strong>
          “You were talking to me first… so let's just talk.”
        </strong>{" "}
        😂
      </>,
      <>
        And somehow, through all this madness,{" "}
        <strong>
          you still manage to support me — willingly, unwillingly,
          and sometimes after very detailed instructions.
        </strong>{" "}
        😂
      </>,
      <>
        I may have to tell you exactly what I want, how I want it,
        and occasionally give you a complete user manual… but you
        still put in the effort to make my dreams, wishes, and even
        my ridiculous little demands come true.
      </>,
      <>
        You may act annoyed, pretend you don't care, and give me
        that <em>“okay, okay, fine”</em> attitude…
      </>,
      <>
        but somehow, <strong>you always do it.</strong>
      </>,
      <>
        That's just you —{" "}
        <strong>
          my favorite person to fight with, boss around, annoy,
          and love a little more every day.
        </strong>{" "}
        ❤️
      </>,
    ],
  },
];

export default function Memories() {
  return (
    <section className="memories-section" id="memories">
      <div className="memories-container">

        <div className="memories-heading">
          <p className="section-label">
            Little pieces of us
          </p>

          <h2>
            Some of my
            <span>favorite memories</span>
          </h2>

          <p className="memories-intro">
            From the most ridiculous beginning to all
            the little moments that followed.
          </p>
        </div>

        <div className="memories-list">
          {memories.map((memory, index) => (
            <div className="memory-item" key={memory.number}>

              <div className="memory-number">
                {memory.number}
              </div>

              <div className="memory-content">

                <div className={`memory-photo photo-${index + 1}`}>
                    <img
                        src={memory.image}
                        alt={memory.title}
                        loading={index === 0 ? "eager" : "lazy"}
                    />
                </div>

                <div className="memory-info">
                  <h3>{memory.title}</h3>

                  {memory.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>
                      {paragraph}
                    </p>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}