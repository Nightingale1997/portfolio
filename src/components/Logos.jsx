function Logos() {
  return (
    <div className="container is-white">
      <h1 className="title has-text-centered is-4">
        Companies I've collaborated with:
      </h1>
      <div className="columns is-desktop">
        <div className="column"></div>
        <div className="column mx-5">
          <figure className="image is-5by4 grayscale" data-aos="zoom-in-up">
            <img src="logos/i3tex.png" alt="i3tex" />
          </figure>
        </div>
        <div className="column mx-5">
          <figure
            className="image is-5by4 grayscale"
            data-aos="zoom-in-up"
            data-aos-delay="100"
          >
            <img src="logos/hello.png" alt="Hello" />
          </figure>
        </div>
        <div className="column mx-5">
          <figure
            className="image is-5by4 grayscale"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <img src="logos/hbs.png" alt="HBS" />
          </figure>
        </div>
        <div className="column mx-5">
          <figure
            className="image is-5by4 grayscale"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            <img src="logos/csr.png" alt="CSR" />
          </figure>
        </div>
        <div className="column mx-5">
          <figure
            className="image is-5by4 grayscale"
            data-aos="zoom-in-up"
            data-aos-delay="400"
          >
            <img src="logos/chs.png" alt="Chimp Solutions" />
          </figure>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
}

export default Logos;
