import React, {useState} from "react";
import { validateEmail } from "../../Utils/helpers"



function Contact() {

  const [formState, setFormState ] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

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
              <label for="NameContact" className="contactLabels form-label">Name:</label>
              <input type="text" className="form-control" id="NameContact" onBlur={handleFormChange} placeholder="Enter name"/>
            </div>
          </div> 
          <div className="container d-flex justify-content-center">
            <div className="form-group col-lg-6">
              <label for="EmailContact" className="contactLabels">Email address:</label>
              <input type="email" className="form-control" id="EmailContact" onBlur={handleFormChange} placeholder="Enter email"/>
            </div>
          </div>
          <div className="container d-flex justify-content-center">
            <div className="form-group col-lg-8">
              <label for="ContactMessage" className="contactLabels">Message:</label>
              <textarea type="text" className="form-control" id="ContactMessage" onBlur={handleFormChange} rows="4" placeholder=" "/>
            </div>
          </div>
          <br />
          <button type="submit" className="btn btn-outline-light col-lg-3 col-md-3 col-sm-1" onSubmit={handleFormSubmit}  id="submitButton">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;