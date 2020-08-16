import React from 'react';
import contact from '../assets/contact-half.jpg'
import BannerHalf from './components-small/BannerHalf';
import H4AndParagraph from './components-small/H4AndParagraph';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import { TextField, Button } from '@material-ui/core';

function Contact() {
  const iconSize = "4rem";
  const iconColor = "#ff2b58"
  return (
    <div className="contact">
      <BannerHalf bannerText="Contact" bannerUrl={contact} />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.2893592743794!2d-122.35146608396607!3d47.620506279185506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490151f4ed5b7f9%3A0xdb2ba8689ed0920d!2sSpace%20Needle!5e0!3m2!1shr!2shr!4v1597591901495!5m2!1shr!2shr" width="100%" height="450" style={{border:"0"}} aria-hidden="false"></iframe>
      <div className="container" style={{margin: "0 auto"}}>
        <h2 className="contact__h2">Contact Us</h2>
        <div className="contact__main">
          <div>
            <div className="contact__info">
              <RoomIcon style={ {fontSize: `${iconSize}`, color: `${iconColor}`} } />
              <H4AndParagraph header="400 Broad St, Seattle, WA 98109, United States of America" paragraph="" />
            </div>
            <div className="contact__info">
              <PhoneIcon style={ {fontSize: `${iconSize}`, color: `${iconColor}`} } />
              <H4AndParagraph header="+321-5564-2302-4526-321" paragraph="" />
            </div>
            <div className="contact__info">
              <EmailIcon style={ {fontSize: `${iconSize}`, color: `${iconColor}`} } />
              <H4AndParagraph header="itcomp@itcomp.com" paragraph="" />
            </div>
          </div>

          <div className="contact__form">
            <div className="contact__user">
              <TextField id="outlined-basic" label="Name" variant="outlined" autoFocus />
              <TextField id="outlined-basic" label="Email" variant="outlined" />
            </div>
            <div className="contact__message">
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={12}
                variant="outlined"
              />
            <Button color="secondary" className="buttons contact__button" onClick={()=>alert("This is just a placeholder button. It has no function.")}>
              Send Message
            </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
