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
import MediaQuery from "react-responsive";

const AboutMe = () => {
  return (
    <MDBContainer className="cards">
      <MDBRow>
        <MDBCol>
          <MDBAnimation type="fadeInLeft" delay=".3s">
            <MediaQuery minDeviceWidth={1201}>
              <MDBCard>
                <div
                  className="text-white text-center d-flex align-items-center rgba-black-strong py-lg-5"
                  style={{width: "100%", height: "auto"}}
                >
                  <div className="align-text-center">
                    <h5 className="pink-text">
                      <MDBIcon icon="pencil-alt" size="2x" />
                    </h5>
                    <MDBCardTitle tag="h3" className="pt-2">
                      <strong>About Me</strong>
                    </MDBCardTitle>
                    <p style={{margin: "2.5% 10% 2.5% 10%"}}>
                      Natively from Miami, I have always lived in the sunny
                      south of Florida. I graduated from Washington University
                      in St. Louis in 2019, with a Bachelors of Science in
                      Architecture. I then went on to work for Plaza
                      Construction where i was able to fulfill my dreams of
                      being integrated with the fields of building. Hungry for a
                      new frontier, as well as given an oppurtunity from Covid,
                      i pursued my new career in Full Stack Web Development.
                      This has allowed me to employ my design-related and
                      functional problem solving abilities in a whole new world.
                    </p>
                    <p style={{margin: "0 10% 0 10%"}}>
                      Although i have shifted into the world of software, my
                      love for graphical and physical design and construction
                      burns as bright as ever. I love to wood work in my garage,
                      draw anything and everything i can think of, and am
                      constantly creating graphic art using adobe illustrator.
                    </p>
                  </div>
                </div>
              </MDBCard>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1200}>
              <MDBAnimation type="fadeInLeft" delay=".3s">
                <h3 className="white-text text-center">About</h3>
              </MDBAnimation>
              <MDBAnimation type="fadeInLeft" delay=".6s">
                <p
                  className="white-text text-center"
                  style={{margin: "2.5% 10% 2.5% 10%"}}
                >
                  Natively from Miami, I have always lived in the sunny south of
                  Florida. I graduated from Washington University in St. Louis
                  in 2019, with a Bachelors of Science in Architecture. I then
                  went on to work for Plaza Construction where i was able to
                  fulfill my dreams of being integrated with the fields of
                  building. Hungry for a new frontier, as well as given an
                  oppurtunity from Covid, i pursued my new career in Full Stack
                  Web Development. This has allowed me to employ my
                  design-related and functional problem solving abilities in a
                  whole new world.
                </p>
              </MDBAnimation>
              <MDBAnimation type="fadeInLeft" delay=".9s">
                <p
                  className="white-text text-center"
                  style={{margin: "0 10% 0 10%"}}
                >
                  Although i have shifted into the world of software, my love
                  for graphical and physical design and construction burns as
                  bright as ever. I love to wood work in my garage, draw
                  anything and everything i can think of, and am constantly
                  creating graphic art using adobe illustrator.
                </p>
              </MDBAnimation>
            </MediaQuery>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;
