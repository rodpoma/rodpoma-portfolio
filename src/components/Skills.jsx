import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBIcon,
  MDBCardTitle,
  MDBAnimation,
  MDBContainer,
} from "mdbreact";

const Skills = () => {
  return (
    <MDBContainer className="cards">
      <MDBRow>
        <MDBCol>
          <MDBAnimation type="fadeInLeft" delay=".3s">
            <MDBCard
              className="card-image"
              // style={{
              //   backgroundImage:
              //     "url('https://mdbootstrap.com/img/Photos/Others/architecture.jpg')",
              // }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-5">
                <div>
                  <h5 className="pink-text">
                    <MDBIcon icon="pencil-alt" size="2x" />
                  </h5>
                  <MDBCardTitle tag="h3" className="pt-2">
                    <strong>Design</strong>
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
        <MDBCol>
          <MDBAnimation type="fadeInDown" delay=".3s">
            <MDBCard
              className="card-image"
              // style={{
              //   backgroundImage:
              //     "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')",
              // }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-5">
                <div>
                  <h5 className="pink-text">
                    <MDBIcon icon="code" size="2x" />
                  </h5>
                  <MDBCardTitle tag="h3" className="pt-2">
                    <strong>Front-End</strong>
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
        <MDBCol>
          <MDBAnimation type="fadeInRight" delay=".3s">
            <MDBCard
              className="card-image"
              // style={{
              //   backgroundImage:
              //     "url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')",
              // }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-5">
                <div>
                  <h5 className="pink-text">
                    <MDBIcon icon="database" size="2x" />
                  </h5>
                  <MDBCardTitle tag="h3" className="pt-2">
                    <strong>Back-End</strong>
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

export default Skills;
