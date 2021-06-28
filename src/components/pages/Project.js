import React from 'react';
import ResumePNG from '../../assets/resume.pdf';

function Project() {
  return (
    <div className="contact-card">
      <div className="card">
        <h1 className="text-center">Resume</h1>
        <div className="card-content">
          <a href="tel:+5127366011" className="ml-4 mt-4 font-weight-bold">
            Phone
          </a>

          <a
            href="mailto:nizzyno@icloud.com"
            className="ml-4 mt-4 font-weight-bold"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/noah-harbison-5b826752/"
            className="ml-4 mt-4 font-weight-bold"
          >
            LinkedIn
          </a>

          <a
            href="https://www.github.com/nizzyno/"
            className="ml-4 mt-4 font-weight-bold"
          >
            GitHub
          </a>

          <img src={ResumePNG} alt="/" className="resumePNG"></img>
          <a href="/">
            <h1 className="text-center mt-2">View Here</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
