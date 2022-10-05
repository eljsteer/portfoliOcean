import React from 'react';


function Contact() {
    return (
      <div className="container-fluid flex-column d-flex moreSpace">
        <div id="ContactForm">
          <h2 className="moreSpace ContactHeader">Contact Me</h2>
        </div>
        <form className="form container">
          <div className="form-group">
            <label for="NameContact" className="ContactLabels">Name:</label>
            <input type="text" className="form-control" id="NameContact" placeholder="Enter name"/>
          </div>
          <div className="form-group">
            <label for="EmailContact" className="ContactLabels">Email address:</label>
            <input type="email" className="form-control" id="EmailContact" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label for="ContactMessage" className="ContactLabels">Message:</label>
            <textarea type="text" className="form-control" id="ContactMessage" placeholder=" Enter message"/>
          </div>
          <br />
          <button type="submit" className="btn btn-outline-light" id="SubmitButton">Submit</button>
        </form>
      </div>
    );
}

export default Contact;