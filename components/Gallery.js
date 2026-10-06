const photos = [
  {
    id: 1,
    src: "/images/gallery-01.png",
    caption: "Just two idiots being silly",
    rotation: "rotate-left",
  },
  {
    id: 2,
    src: "/images/gallery-02.png",
    caption: "My favorite temptation",
    rotation: "rotate-right",
  },
  {
    id: 3,
    src: "/images/gallery-03.png",
    caption: "Dressed up, still my idiot",
    rotation: "rotate-left-small",
  },
  {
    id: 4,
    src: "/images/gallery-04.png",
    caption: "You smiled. I melted",
    rotation: "rotate-right-small",
  },
  {
    id: 5,
    src: "/images/gallery-05.png",
    caption: "You carry, I cling",
    rotation: "rotate-left",
  },
  {
    id: 6,
    src: "/images/gallery-06.png",
    caption: "Making our own love story",
    rotation: "rotate-right",
  },
];

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">

        <div className="gallery-heading">
          <p className="section-label">
            Captured moments
          </p>

          <h2>
            Little moments,
            <span>big memories.</span>
          </h2>

          <p>
            Some pictures hold an entire story
            without saying a single word.
          </p>
        </div>

        <div className="polaroid-grid">
          {photos.map((photo) => (
            <div
              className={`polaroid ${photo.rotation}`}
              key={photo.id}
            >
              <div className="polaroid-image">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                />
              </div>

              <p>{photo.caption}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}