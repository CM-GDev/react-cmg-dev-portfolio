import React from 'react';
import Resume from '../../img/Resume.pdf';
import resumepic from '../../img/resume.JPG'

export default function AboutMe() {
  return (
    <main className='container'>
      <h3 className="blue-text text-darken-1">Resume</h3>
      <a className="btn waves-effect waves-light blue darken-1" href={Resume} target="blank">Download Resume<i className='material-icons right'>description</i></a>
      <article className="col s12 light-green lighten-5 card-panel center-align">
        <img src={resumepic} alt="Resume" />
      </article>
    </main>
  );
}