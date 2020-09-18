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
              <div className="text-white d-flex align-items-center rgba-black-strong py-5 px-5">
                <div>
                  <h5 className="pink-text">
                    <MDBIcon icon="pencil-alt" size="2x" />
                  </h5>
                  <MDBCardTitle tag="h3" className="pt-2">
                    <strong>Design</strong>
                  </MDBCardTitle>
                  <p>
                    As an Architect, i am educated in many forms of graphical
                    design and architectural modeling.
                  </p>
                  <p>
                    My skills include:
                    <ul>
                      <li>Adobe Illustrator</li>
                      <li>Adobe Photoshop</li>
                      <li>Adobe InDesign</li>
                      <li>Rhino 5</li>
                      <li>AutoCad</li>
                    </ul>
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
              <div className="text-white d-flex align-items-center rgba-black-strong py-5 px-5">
                <div>
                  <h5 className="pink-text">
                    <MDBIcon icon="code" size="2x" />
                  </h5>
                  <MDBCardTitle tag="h3" className="pt-2">
                    <strong>Front-End</strong>
                  </MDBCardTitle>
                  <p>
                    My love for the Front-End comes from being able to curate an
                    experience for a user.
                  </p>
                  <p>
                    My skills include:
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>React.JS</li>
                      <li>JavaScript</li>
                      <li>AutoCad</li>
                      <li>MDBReact</li>
                      <li>Bootstrap</li>
                    </ul>
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
              <div className="text-white d-flex align-items-center rgba-black-strong py-5 px-5">
                <div>
                  <h5 className="pink-text">
                    <MDBIcon icon="database" size="2x" />
                  </h5>
                  <MDBCardTitle tag="h3" className="pt-2">
                    <strong>Back-End</strong>
                  </MDBCardTitle>
                  <p>
                    The Back-End is interesting because it acts as the
                    foundation for most apps. Without the foundation and
                    structure, the app cannot stand.
                  </p>
                  <p>
                    My skills include:
                    <ul>
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>MongoDB</li>
                      <li>Mongoose</li>
                    </ul>
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
