function Skills() {
  return (
    <section className="section skills has-text-centered">
      <div className="container is-narrow">
        <div className="box">
          <div className="content">
            <div className="columns is-centered has-text-centered">
              <div className="column has-right-border">
                <figure className="image is-48x48">
                  <img className="purple-filter" src="pen.svg" alt="Design" />
                </figure>
                <h1 className="title is-size-4 is-spaced">Designer</h1>
                <p>
                  I value clean designs that deliver meaningful interactions.
                </p>
                <p className="list-title has-text-purple has-text-weight-semibold">
                  Things I enjoy designing:
                </p>
                <p>UX, UI, Web, Mobile, Apps</p>
                <p className="list-title has-text-purple has-text-weight-semibold">
                  Design Tools:
                </p>
                <ul>
                  <li>Figma</li>
                  <li>Invision</li>
                  <li>Photoshop</li>
                  <li>Prototyping</li>
                  <li>Pen &amp; Paper</li>
                  <li>Balsamiq Mockups</li>
                </ul>
              </div>
              <div className="column has-right-border">
                <figure className="image is-48x48">
                  <img
                    className="purple-filter"
                    src="code.svg"
                    alt="Front-end development"
                  />
                </figure>
                <h1 className="title is-size-4 is-spaced">
                  Front-end Developer
                </h1>
                <p>
                  I enjoy bringing ideas to life in the browser through
                  interactivity and animations.
                </p>
                <p className="list-title has-text-purple has-text-weight-semibold">
                  Languages I speak:
                </p>
                <p>HTML, CSS, Javascript, Kotlin, XML</p>
                <p className="list-title has-text-purple has-text-weight-semibold">
                  Tools & Frameworks:
                </p>
                <ul>
                  <li>React</li>
                  <li>Vue</li>
                  <li>Electron.js</li>
                  <li>React-Native</li>
                  <li>Sass</li>
                  <li>Android Studio</li>
                </ul>
              </div>
              <div className="column">
                <figure className="image is-48x48">
                  <img
                    className="purple-filter"
                    src="database.svg"
                    alt="Back-end development"
                  />
                </figure>
                <h1 className="title is-size-4 is-spaced">
                  Back-end Developer
                </h1>
                <p>
                  I believe in interconnected experiences where servers become a
                  natural component.
                </p>
                <p className="list-title has-text-purple has-text-weight-semibold">
                  Frameworks I work with:
                </p>
                <p>Node.js, PHP, Java, SQL, MongoDB</p>
                <p className="list-title has-text-purple has-text-weight-semibold">
                  Technologies:
                </p>
                <ul>
                  <li>Git</li>
                  <li>Next.js</li>
                  <li>Express</li>
                  <li>Firebase</li>
                  <li>Meteor.js</li>
                  <li>Wordpress</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
