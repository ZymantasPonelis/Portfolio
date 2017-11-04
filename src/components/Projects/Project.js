import React from 'react';
import './Project.css';

const Project = props => {
  return (
    <div className="project-card">
      <div className="card-image">
        <img className="screenshot" src={props.image} alt={props.altText} />
      </div>
      <div className="card-text">
        <h3 className="project-name">{props.name}</h3>
        <div className="links">
          {props.repoLink && (
            <a href={props.repoLink} target="_blank">
              View on GitHub
            </a>
          )}
          {props.liveLink && (
            <span>
              {' '}
              •{' '}
              <a href={props.liveLink} target="_blank">
                View Live
              </a>
            </span>
          )}
        </div>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: props.desc }}
        />
      </div>
    </div>
  );
};

export default Project;
