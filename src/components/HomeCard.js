import React from 'react';
// import HomeProfile from '../assets/img/home.jpg';

function HomeCard() {
  return (
    <div className="row row-home">
      <div className="col-4">
        <div className="card card-home">
          <div className="card-body">
            {/* <img
              src={HomeProfile}
              alt="home-photo"
              className="ome-profile-photo mb-3"
            ></img> */}
            <h5 className="card-title text-center">Full Stack Web developer</h5>
            <p className="card-text text-center">
              Offering a variety of services and professional support.
            </p>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/noah-harbison-5b826752/"
                  className="ml-5"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.github.com/nizzyno/" className="ml-5">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
