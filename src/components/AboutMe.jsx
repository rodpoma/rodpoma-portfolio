import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBCard,
  MDBAnimation,
  MDBIcon,
} from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="cards">
      <MDBRow>
        <MDBCol>
          <MDBAnimation type="fadeInLeft" delay=".3s">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  "url('https://mdbootstrap.com/img/Photos/Others/architecture.jpg')",
              }}
            >
              <div
                className="text-white text-center d-flex align-items-center rgba-black-strong py-5"
                style={{height: "500px"}}
              >
                <div>
                  <h5 className="pink-text">
                    <MDBIcon icon="pencil-alt" size="2x" />
                  </h5>
                  <MDBCardTitle tag="h3" className="pt-2">
                    <strong>About Me</strong>
                  </MDBCardTitle>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                    sit officia accusamus minus error nisi architecto nulla
                    ipsum dignissimos. Odit sed qui, dolorum!
                  </p>
                </div>
              </div>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;
