import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      {name && <h3>{name}</h3>} {/* Conditionally render name */}
      {about && <p>{about}</p>} {/* Conditionally render about */}
      <div className="technologies">
        {technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
