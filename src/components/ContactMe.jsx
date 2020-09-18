import React from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBAnimation,
} from "mdbreact";
import emailjs from "emailjs-com";

const FormPage = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE}`,
        e.target,
        `${process.env.REACT_APP_EMAILJS_USER}`
      )
      .then(
        result => {
          console.log(result.text);
          alert("email sent!");
        },
        error => {
          console.log(error.text);
          alert("something went wrong!");
        }
      );
  }

  return (
    <MDBContainer className="cards">
      <MDBAnimation type="fadeInDown" delay=".3s">
        <MDBCard>
          <MDBCardBody className="rgba-grey-light">
            <form onSubmit={sendEmail}>
              <p className="h5 text-center mb-4 pink-text">Contact Me!</p>
              <div className="pink-text">
                <MDBInput
                  label="Your name"
                  icon="user"
                  name="user_name"
                  group
                  type="text"
                  validate
                />
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  name="user_email"
                  group
                  type="email"
                  validate
                />
                <MDBInput
                  label="Subject"
                  icon="tag"
                  name="subject"
                  group
                  type="text"
                  validate
                />
                <MDBInput
                  type="textarea"
                  name="message"
                  rows="2"
                  label="Your message"
                  icon="pencil-alt"
                />
              </div>
              <div className="text-center">
                <MDBBtn outline color="secondary" type="submit">
                  Send
                  <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBContainer>
  );
};

export default FormPage;
