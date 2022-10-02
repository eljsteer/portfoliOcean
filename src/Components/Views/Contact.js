import React from 'react';

function Contact() {
    return (
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 justify-content-center" id="ContactForm">
        
        <h2 className="ContactHeader">Contact Me</h2>
    
        <form className="form col-6 justify-content-center">
          <div className="form-group">
            <label for="NameContact" id="ContactLabels">Name:</label>
            <input type="text" className="form-control" id="NameContact" placeholder="Enter name"/>
          </div>
          <div className="form-group">
            <label for="EmailContact" id="ContactLabels">Email address:</label>
            <input type="email" className="form-control" id="EmailContact" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label for="ContactMessage" id="ContactLabels">Message:</label>
            <textarea type="text" className="form-control" id="ContactMessage" placeholder=" Enter message"/>
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