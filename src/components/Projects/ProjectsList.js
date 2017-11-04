import React from 'react';
import Scroll from 'react-scroll';
import Project from './Project';
import Data from '../../data';
import './ProjectsList.css';
const Element = Scroll.Element;

const ProjectsList = Data.map((proj, i) => {
  return (
    <Project
      key={`Project-${i}`}
      name={proj.name}
      image={proj.screenshot}
      repoLink={proj.repoLink}
      liveLink={proj.liveLink}
      desc={proj.description}
      altText={proj.altText}
    />
  );
});

const Projects = () => {
  return (
    <Element name="projects">
      <section id="projects" className="projects">
        <h2 className="section-heading">{'< Projects />'}</h2>
        <div className="project-cards">{ProjectsList}</div>
      </section>
    </Element>
  );
};

export default Projects;
