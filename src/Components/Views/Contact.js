import React, {useState} from "react";
import { validateEmail } from "../../Utils/helpers"

function Contact() {

  const [formState, setFormState ] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { Name, Email, Message } = formState;

  function handleFormChange(event) {
    if (event.target.name === "email") {
        const isValid = validateEmail(event.target.value);
        if (!isValid) {
            setErrorMessage("A Valid Email is Required");

        } else {
            setErrorMessage("");
        }
    } else {
        if (!event.target.value.length) {
            setErrorMessage(`${event.target.name} is a required field`);
        } else {
            setErrorMessage("");
        }
    }
    if (!errorMessage) {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    }
    }
  

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!errorMessage) {

        console.log(formState);
    }
  }

  return (
    <div className="container-fluid flex-column d-flex">
      <div id="ContactForm">
        <h2 className="moreSpace ContactHeader">Contact Me</h2>
      </div>
      <div id="contactContainer row">
        <form id="formContainer" className="form container col-md-6 needs-validation" noValidate>
          <div className="container d-flex justify-content-center">
            <div className="form-group col-lg-6">
              <label htmlFor="validationDefault01" className="contactLabels form-label">Name:</label>
              <input type="text" className="form-control" id="validationDefault01" name="Name" onBlur={handleFormChange} aria-live="assertive" placeholder="Enter name" required/>
            </div>
          </div> 
          <div className="container d-flex justify-content-center">
            <div className="form-group col-lg-6">
              <label htmlFor="validationDefaultEmail" className="contactLabels">Email address:</label>
              <input type="email" className="form-control" id="validationDefaultEmail" name="Email" onBlur={handleFormChange} aria-live="assertive" placeholder="Enter email" required/>
            </div>
          </div>
          <div className="container d-flex justify-content-center">
            <div className="form-group col-lg-8">
              <label htmlFor="validationDefaultMessage" className="contactLabels">Message:</label>
              <textarea type="text" className="form-control is-valid" id="validationDefaultMessage" name="Message" onBlur={handleFormChange} rows="4" aria-live="assertive" placeholder="Please enter your message " required/>
            </div>
          </div>
          <br />
          <button type="submit" className="btn btn-outline-light col-lg-3 col-md-3 col-sm-1" onSubmit={handleFormSubmit}  id="submitButton">Submit</button>
          {errorMessage && (<p>{errorMessage}</p>)}
        </form>
      </div>
    </div>
  );
}

export default Contact;