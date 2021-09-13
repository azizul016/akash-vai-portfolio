import React from "react";
import materialUI from "../assets/images/method-draw-image.svg";
import firebase from "../assets/images/firebase.svg";
import redux from "../assets/images/redux.svg";
import "./Skils.css";

const Skills = () => {
  return (
    <section id='skills' className='pt-5'>
      <div
        style={{
          background: "#030C1A",
          borderTop: "3px solid #7b9095",
          borderBottom: "3px solid #7b9095",
          paddingTop: "30px",
        }}
      >
        <h5 className='text-center text-white'>Skills</h5>
        <p className='text-center text-white'>
          “Skills don’t die; Only people do.”I believe in this quote. So I
          always look to get new technologies to learn.
        </p>

        <div className='row row-cols-2 row-cols-md-3 pt-2 text-white alignment align-items-center'>
          <div className='col d-flex flex-column align-items-center justify-content-center icon-transition pb-3'>
            <div className='d-flex align-items-center'>
              <i className='devicon-react-original display-4'></i>
            </div>
            <h5 style={{ color: "#ffffff" }}>React.js</h5>
          </div>
          <div className='col d-flex flex-column align-items-center justify-content-center icon-transition pb-3'>
            <div className=' d-flex align-items-center'>
              <i className='devicon-nodejs-plain display-4'></i>
            </div>
            <h5 style={{ color: "#ffffff" }}>Node.js</h5>
          </div>
          <div className='col d-flex flex-column align-items-center justify-content-center icon-transition pb-3'>
            <div className=' d-flex align-items-center'>
              <i class='devicon-express-original display-4'></i>
            </div>
            <h5 style={{ color: "#ffffff" }}>Express.js</h5>
          </div>
          <div className='col d-flex flex-column align-items-center justify-content-center icon-transition pb-3'>
            <div className=' d-flex align-items-center'>
              <i className='devicon-javascript-plain display-4'></i>
            </div>
            <h5 style={{ color: "#ffffff" }}>JavaScript</h5>
          </div>
          <div className='col d-flex flex-column align-items-center justify-content-center icon-transition pb-3'>
            <div className=' d-flex align-items-center'>
              <img width='60px' style={{ color: "#fff" }} src={redux} alt='' />
            </div>
            <h5 style={{ color: "#ffffff" }}>C++</h5>
          </div>
          <div className='col d-flex flex-column align-items-center justify-content-center icon-transition pb-3'>
            <div className=' d-flex align-items-center'>
              <i
                style={{ fontSize: "50px" }}
                className='devicon-sass-original'
              ></i>
            </div>
            <h5 style={{ color: "#ffffff" }}>SASS & SCSS</h5>
          </div>
          <div className='col d-flex flex-column align-items-center justify-content-center icon-transition pb-3'>
            <div className=' d-flex align-items-center'>
              <i className='devicon-html5-plain display-4'></i>
            </div>
            <h5 style={{ color: "#ffffff" }}>HTML</h5>
          </div>
          <div className='col d-flex flex-column align-items-center justify-content-center icon-transition pb-3'>
            <div className=' d-flex align-items-center'>
              <i className='devicon-css3-plain display-4'></i>
            </div>
            <h5 style={{ color: "#ffffff" }}>CSS</h5>
          </div>
          <div className='col d-flex flex-column align-items-center justify-content-center icon-transition pb-3'>
            <div className=' d-flex align-items-center'>
              <i class='devicon-bootstrap-plain display-4'></i>
            </div>
            <h5 style={{ color: "#ffffff" }}>Bootstrap</h5>
          </div>
          <div className='col d-flex flex-column align-items-center justify-content-center icon-transition pb-3'>
            <div className=' d-flex align-items-center'>
              <img
                width='60px'
                style={{ color: "#fff" }}
                src={materialUI}
                alt=''
              />
            </div>
            <h5 style={{ color: "#ffffff" }}>Material UI</h5>
          </div>
          <div className='col d-flex flex-column align-items-center justify-content-center icon-transition pb-3'>
            <div className=' d-flex align-items-center'>
              <i class='devicon-mongodb-plain display-4'></i>
            </div>
            <h5 style={{ color: "#ffffff" }}>Mongodb</h5>
          </div>
          <div className='col d-flex flex-column align-items-center justify-content-center icon-transition pb-3'>
            <div className=' d-flex align-items-center'></div>
            <h5 style={{ color: "#ffffff" }}>Mongoose</h5>
          </div>
          <div className='col d-flex flex-column align-items-center justify-content-center icon-transition pb-3'>
            <div className=' d-flex align-items-center'>
              <img
                width='60px'
                style={{ color: "#fff" }}
                src={firebase}
                alt=''
              />
            </div>
            <h5 style={{ color: "#ffffff" }}>Firebase</h5>
          </div>
          <div className='col d-flex flex-column align-items-center justify-content-center icon-transition pb-3'>
            <div className=' d-flex align-items-center'>
              <i class='devicon-heroku-original display-4'></i>
            </div>
            <h5 style={{ color: "#ffffff" }}>Heroku</h5>
          </div>
          <div className='col d-flex flex-column align-items-center justify-content-center icon-transition pb-3'>
            <div className=' d-flex align-items-center'>
              <i style={{ fontSize: "50px" }} class='devicon-github-plain'></i>
            </div>
            <h5 style={{ color: "#ffffff" }}>GitHub</h5>
          </div>
          <div className='col d-flex flex-column align-items-center justify-content-center icon-transition pb-3'>
            <div className=' d-flex align-items-center'>
              <i class='devicon-npm-original-wordmark display-4'></i>
            </div>
            <h5 style={{ color: "#ffffff" }}>npm</h5>
          </div>
          <div className='col d-flex flex-column align-items-center justify-content-center icon-transition pb-3'>
            <div className=' d-flex align-items-center'>
              <i class='devicon-visualstudio-plain display-4'></i>
            </div>
            <h5 style={{ color: "#ffffff" }}>Visual Studio</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

// import React, { Component } from 'react'
// import Section from '../components/Section'
// import Skill from '../components/Skill'

// class Skills extends Component {
//   state = {
//     workData: [
//       { icon: 'fa-check', text: 'Mobile-First, Responsive Design' },
//       { icon: 'fa-check', text: 'Cross Browser Testing & Debugging' },
//       { icon: 'fa-check', text: 'Cross Functional Teams' },
//       { icon: 'fa-check', text: 'Agile Development & Scrum' },
//     ],

//     skills: [
//       {
//         title: 'JavaScript',
//         progress: '90%',
//       },
//       {
//         title: 'CSS',
//         progress: '85%',
//       },
//       {
//         title: 'HTML',
//         progress: '85%',
//       },
//       {
//         title: 'Photoshop / Figma',
//         progress: '60%',
//       },
//       {
//         title: 'Vs Code',
//         progress: '80%',
//       },

//     ],
//     frameworks: [
//       {
//         title: 'React.js',
//         progress: '95%',
//       },
//       {
//         title: 'Bootstrap',
//         progress: '90%',
//       },
//       {
//         title: 'Material-UI',
//         progress: '80%',
//       },
//       {
//         title: 'Heroku',
//         progress: '80%',
//       },
//       {
//         title: 'Firebase',
//         progress: '80%',
//       },

//     ],
//   }

//   render() {
//     const { skills, frameworks } = this.state

//     const skillsJsx = skills.map((skill, index) => (
//       <div className='col-md-8 py-1' key={index}>
//         <Skill skill={skill} />
//       </div>
//     ))

//     const frameworksJsx = frameworks.map((skill, index) => (
//       <div className='col-md-8 py-1' key={index}>
//         <Skill skill={skill} secondary />
//       </div>
//     ))

//     // const workOverFlow = (
//     //   <ul className='fa-ul mb-0'>
//     //     {workData.map(({ icon, text }, index) => (
//     //       <li key={index}>
//     //         <span className='fa-li'>
//     //           <i className={`fas ${icon}`}></i>
//     //         </span>
//     //         {text}
//     //       </li>
//     //     ))}
//     //   </ul>
//     // )

//     return (
//       <Section id='skills' title='Skills'>
//         <div className='subheading mb-3'>Coding Languages</div>
//         <div className='row mb-4'>{skillsJsx}</div>
//         <div className='subheading mb-3'>Frameworks / Libraries</div>
//         <div className='row mb-4'>{frameworksJsx}</div>
//         {/* <div className="subheading mb-3">Workflow</div>
//         {workOverFlow} */}
//       </Section>
//     )
//   }
// }

// export default Skills
