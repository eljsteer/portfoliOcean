import React from 'react';

function Contact() {
    return (
      <div className="row">
        <div className="col-md-6" id="ContactForm">
        
        <h2 className="ContactHeader">Contact Me</h2>
    
        <form className="form">
          <div className="form-group">
            <label for="NameContact" id="ContactLabels">Name:</label>
            <input type="text" className="form-control" id="NameContact" placeholder="Enter name"></input>
          </div>
          <div className="form-group">
            <label for="EmailContact" id="ContactLabels">Email address:</label>
            <input type="email" className="form-control" id="EmailContact" aria-describedby="emailHelp" placeholder="Enter email"></input>
          </div>
          <div className="form-group">
            <label for="ContactMessage" id="ContactLabels">Message:</label>
            <textarea type="text" className="form-control" id="ContactMessage" placeholder=" Enter message"></textarea>
          </div>
          <br />
          <button type="submit" className="btn btn-outline-light" id="SubmitButton">Submit</button>
        </form>
        <br />
      </div>
    </div>
    );
}

export default Contact;