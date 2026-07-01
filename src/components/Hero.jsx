import Navigation from "./Navigation";

function Hero() {
  return (
    //<Parallax
    //  bgImage="https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
    //  bgImageAlt="the cat"
    //  strength={300}
    //  >
    <section id="hero" className="hero is-fullheight">
      <Navigation />
      <div className="hero-body is-white">
        <div className="container">
          <div className="columns has-text-centered is-vcentered">
            <div className="column" data-aos="fade-right">
              <p className="subtitle is-4">Hi, I'm</p>
              <p className="title is-1">
                Kevin <span className="has-text-purple">Solovjov</span>
              </p>
              <p className="subtitle is-4">UI/UX Designer and Web Developer</p>
              <a className="button is-purple is-medium" href="#introduction">
                Explore
              </a>
            </div>
            <div className="column" data-aos="fade-left">
              <figure className="image is-square">
                <img className="hero-img normal-only" src="me_round.png" alt="Kevin Solovjov" />
                <img className="hero-img hd-only" src="me_round_hd.png" alt="Kevin Solovjov" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    //</Parallax>
  );
}

export default Hero;
