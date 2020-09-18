import React, {useState} from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBAnimation,
} from "mdbreact";
import axios from "axios";

const FormPage = () => {
  const [formData, setFormData] = useState("");

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("/api/users", formData);
      alert("message sent");
      this.resetForm();
    } catch (error) {
      alert(error);
    }
  };
  return (
    <MDBContainer className="cards">
      <MDBAnimation type="fadeInDown" delay=".3s">
        <MDBCard>
          <MDBCardBody className="rgba-grey-light">
            <form>
              <p className="h5 text-center mb-4 pink-text">Contact Me!</p>
              <div className="pink-text">
                <MDBInput
                  label="Your name"
                  icon="user"
                  name="name"
                  group
                  type="text"
                  validate
                  onChange={handleChange}
                />
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  name="email"
                  group
                  type="email"
                  validate
                  onChange={handleChange}
                />
                <MDBInput
                  label="Subject"
                  icon="tag"
                  name="subject"
                  group
                  type="text"
                  validate
                  onChange={handleChange}
                />
                <MDBInput
                  type="textarea"
                  name="message"
                  rows="2"
                  label="Your message"
                  icon="pencil-alt"
                  onChange={handleChange}
                />
              </div>
              <div className="text-center">
                <MDBBtn outline color="secondary" onClick={handleSubmit}>
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
