import React from 'react';
import { Link, Route } from 'react-router-dom';
import Project from './Project';
import ContactCard from '../ContactCards';

function Contact(props) {
  return (
    <div>
      <Link
        to={`${props.match.url}/project`}
        role="button"
        className="btn btn-link bg-light"
      >
        Learn More
      </Link>{' '}
      <Link to="/contact" role="button" className="btn btn-link bg-light">
        Learn Less
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Project} />
      <ContactCard />
    </div>
  );
}

export default Contact;
