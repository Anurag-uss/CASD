import React from 'react';
import '../styles/roadmap.css';

const RoadmapDisplay = ({ roadmap, isLoading }) => {
  if (isLoading) {
    return (
      <div className="roadmap-container loading">
        <div className="loading-spinner">
          <i className="fas fa-spinner fa-spin"></i>
          <p>Generating your personalized roadmap...</p>
        </div>
      </div>
    );
  }

  if (!roadmap) {
    return (
      <div className="roadmap-container empty">
        <div className="empty-state">
          <i className="fas fa-road"></i>
          <h3>Your Career Roadmap Awaits</h3>
          <p>Start a conversation with Guiddii to generate a personalized career path</p>
        </div>
      </div>
    );
  }

  return (
    <div className="roadmap-container">
      <div className="roadmap-header">
        <h2>{roadmap.career} Roadmap</h2>
        <button className="download-btn">
          <i className="fas fa-download"></i> Download PDF
        </button>
      </div>
      <div className="roadmap-steps">
        <ol>
          {roadmap.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      {roadmap.resources && roadmap.resources.length > 0 && (
        <div className="roadmap-resources">
          <h3>Recommended Resources</h3>
          <ul>
            {roadmap.resources.map((resource, index) => (
              <li key={index}>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RoadmapDisplay;
