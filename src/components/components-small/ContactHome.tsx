import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function ContactHome() {
  return (
    <div className="contact-home">
      <h2>Want to work with us?</h2>
      <Link to="/contact" className="buttons__container">
          <Button disableRipple={true} color="secondary" className="buttons buttons-white">
            Contact Us
          </Button>
        </Link>
    </div>
  );
}

export default ContactHome;