import React from 'react';

function ContactCard(props) {
  return (
    <div className="contact-card">
      <div className="card">
        <h1 className="text-center">Contact Me</h1>
        <div className="card-content">
          <ul>
            <li>
              <a href="tel:+7147860736" className="ml-4 mt-4 font-weight-bold">
                Phone
              </a>
            </li>
            <li>
              <a
                href="mailto:nizzyno@icloud.com"
                className="ml-4 mt-4 font-weight-bold"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/noah-harbison-5b826752/"
                className="ml-4 mt-4 font-weight-bold"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/nizzyno/"
                className="ml-4 mt-4 font-weight-bold"
              >
                GitHub
              </a>
            </li>
            {/* <img src="/" alt="profile-photo" className="profile float-left"></img> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
