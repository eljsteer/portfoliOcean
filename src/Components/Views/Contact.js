import React from 'react';


function Contact() {
    return (
      <div className="container-fluid flex-column d-flex moreSpace">
        <div id="ContactForm">
          <h2 className="moreSpace ContactHeader">Contact Me</h2>
        </div>
        <div id="contactContainer row">
          {/* <div id="contactDetails" className="container col-6">
          </div> */}
          <form id="formContainer" className="form container col-6">
            <div className="container d-flex justify-content-center">
              <div className="form-group col-6">
                <label for="NameContact" className="contactLabels">Name:</label>
                <input type="text" className="form-control" id="NameContact" placeholder="Enter name"/>
              </div>
            </div> 
            <div className="container d-flex justify-content-center">
              <div className="form-group col-6">
                <label for="EmailContact" className="contactLabels">Email address:</label>
                <input type="email" className="form-control" id="EmailContact" aria-describedby="emailHelp" placeholder="Enter email"/>
              </div>
            </div>
            <div className="container d-flex justify-content-center">
              <div className="form-group col-8">
                <label for="ContactMessage" className="contactLabels">Message:</label>
                <textarea type="text" className="form-control" id="ContactMessage" rows="4" placeholder=" Enter message"/>
              </div>
            </div>
            <br />
            <button type="submit" className="btn btn-outline-light w-25"  id="submitButton">Submit</button>
          </form>
        </div>
      </div>
    );
}

export default Contact;