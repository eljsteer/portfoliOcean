import React, {useState, useRef} from "react";
import { validateEmail } from "../../Utils/helpers";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  function handleFormSubmit(event) {
    event.preventDefault();
    if (!errorMessage) {
      emailjs.sendForm('service_iyn7iwb', 'template_e78547h', form.current, 'GumlAi18HzddL4L07')
      .then((result) => {
        if(result.text === "OK") {
          messageSent();
        };
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    } else if (errorMessage) {
      console.log(errorMessage);
    }
  }

  function messageSent() {

  }

  const [formState, setFormState ] = useState({
    name: "",
    email: "",
    message: "",
  });
// for validation states: 2 = Unanswered, 0 = InValid, 1 = Valid, 
  const [valState, setValState] = useState({Name:2, Email:2, Message:2}) 
  const [errorMessage, setErrorMessage] = useState("");
  // const { Name, Email, Message } = formState;

  function handleFormChange(event) {  
    if (event.target.name === "Email") {
        const isValid = validateEmail(event.target.value);
        if (!isValid) {
            setErrorMessage("A Valid Email is Required");
            setValState({Email:0, Name: valState.Name, Message: valState.Message})
          } else {
            setErrorMessage("");
            setValState({Email:1, Name: valState.Name, Message: valState.Message})

        }
    } else if (event.target.name === "Name") {
        if (!event.target.value.length) {
            setErrorMessage(`${event.target.name} is a required field`);
            setValState({Email: valState.Email, [event.target.name]: 0, Message: valState.Message})
        } else {
            setErrorMessage("");
            setValState({Email: valState.Email, [event.target.name]: 1, Message: valState.Message})
        }
    } else 
    if (!event.target.value.length) {
      setErrorMessage(`${event.target.name} is a required field`);
      setValState({Email: valState.Email, [event.target.name]: 0, Name: valState.Name})
    } else {
      setErrorMessage("");
      setValState({Email: valState.Email, [event.target.name]: 1, Name: valState.Name})
    }
    if (!errorMessage) {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  }

  return (
    <div className="container-fluid flex-column d-flex">
      <div>
        <h2 className="moreSpace pageHeader">Contact Me</h2>
      </div>
      <div id="contactContainer">
        <form ref={form} onSubmit={handleFormSubmit} id="formContainer" className="form container col-xxl-4 col-xl-6 col-lg-6 col-md-8 needs-validation">
          <label htmlFor="validationDefault01" className="contactLabels form-label">Name:</label>
          <input type="text" className={ valState.Name===2?'form-control': (valState.Name===1?"form-control is-valid":"form-control is-invalid")} id="validationDefault01" name="Name" onBlur={handleFormChange} aria-live="assertive" placeholder="Enter name" required/>
          <label htmlFor="validationDefaultEmail" className="contactLabels">Email address:</label>
          <input type="email" className={ valState.Email===2?'form-control': (valState.Email===1?"form-control is-valid":"form-control is-invalid")} id="validationDefaultEmail" name="Email" onBlur={handleFormChange} aria-live="assertive" placeholder="Enter email" required/>
          <label htmlFor="validationDefaultMessage" className="contactLabels">Message:</label>
          <textarea type="text" className={ valState.Message===2?'form-control': (valState.Message===1?"form-control is-valid":"form-control is-invalid")} id="validationDefaultMessage" name="Message" onBlur={handleFormChange} rows="4" aria-live="assertive" placeholder="Please enter your message " required/>
          <br/>
          <input type="submit" value="Send" className="btn btn-outline-light col-lg-3 col-md-3 col-sm-2 mb-4" />
        </form>
        {errorMessage && (<p>{errorMessage}</p>)}
      </div>
    </div>
  );
}

export default Contact;