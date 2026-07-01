function Description() {
  return (
    <section id="about" className="section is-white" data-aos="fade-right">
      <div className="container is-narrow">
        <div className="columns is-vcentered mx-6">
          <div className="column" data-aos-delay="200">
            <figure className="image is-square">
              <img className="" src="about_square.png" alt="Kevin Solovjov" />
            </figure>
          </div>
          <div className="column ml-4">
            <h2 className="subtitle">My philosophy:</h2>
            <h1 className="title">
              Imagine <span className="has-text-green-dark">and</span> implement
            </h1>
            <div className="content pr-4 has-text-justified-mobile">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
                <strong>sections</strong>, like the one you're currently
                reading.
              </p>
              <button className="button is-dark mt-5">Do stuff pls</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
