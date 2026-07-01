import Featured from "./Featured";
import FeaturedExtra from "./FeaturedExtra";

function Projects() {
  return (
    <section id="examples" className="projects has-text-centered">
      <header className="is-purple">
        <h1 className="title is-4">Featured Projects</h1>
        <h2 className="subtitle is-6">
          Want to see more?{" "}
          <a href="#contact">
            <strong className="has-text-purple">Contact me</strong>
          </a>
        </h2>
      </header>
      <div className="project-container container is-narrow has-text-centered">
        <div className="columns">
          <Featured
            name={"Monitored Wellbeing"}
            type="Mobile App"
            image="monitored_wellbeing.jpg"
            link="https://carolinexia97.wixsite.com/project-portfolio/home"
            scroll="true"
          />
          <div className="column is-narrow"></div>
          <Featured
            name={"Pawdemic"}
            type="React Game"
            image="pawdemic.png"
            link="https://i3viral.eu.meteorapp.com/"
          />
        </div>

        <div className="divider">More Examples</div>

        <div className="columns is-multiline">
          <FeaturedExtra
            name={"HBS Städ"}
            type="Website"
            image="hbs.jpg"
            link="http://hbsgoteborg.se/"
          />
          <FeaturedExtra
            name={"Chimp Solutions"}
            type="Web Game"
            image="chimpsolutions.jpg"
            link="https://chimpsolutions.se/"
          />

          <FeaturedExtra
            name={"Wärdhuset Spinnaren"}
            type="Prototype"
            image="spinnaren.jpg"
            link="https://invis.io/NEVII0T2DVZ"
          />

          <FeaturedExtra
            name={"Backa Redovisningsbyrå"}
            type="Website"
            image="backa.jpg"
            link="https://www.backaredovisning.se/"
          />

          <FeaturedExtra
            name={"Not So Ordinary"}
            type="Landing Page"
            image="notsoordinary.jpg"
            link="#"
            modal="true"
            modalImage="notsoordinary.jpg"
          />
          <FeaturedExtra
            name={"Backa Redovisningbyrå"}
            type="Website"
            image="hbs.jpg"
            link="#"
            modal="true"
            modalImage="backa.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
