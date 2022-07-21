// importing react and other files
import React from 'react';
import Resume from '../../img/ResumeWebDev2022.pdf';
import resumepic from '../../img/resume.JPG'

// exporting react component
export default function AboutMe() {
  return (
    <main className='container'>
      <h3 className="blue-text text-darken-1">Resume</h3>
      <a className="btn waves-effect waves-light blue darken-1" href={Resume} target="blank">Download Resume<i className='material-icons right'>description</i></a>
      <article className="col s12 light-green lighten-5 card-panel center-align">
        <ul className='collection with-header grey-text text-darken-2'>
          <li className='collection-header'><h5>- Relevant Technical Skilss -</h5></li>
          <li className='collection-item'>JavaScript ES6+</li>
          <li className='collection-item'>CSS3</li>
          <li className='collection-item'>HTML5</li>
          <li className='collection-item'>MERN Stack</li>
          <li className='collection-item'>MySQL</li>
          <li className='collection-item'>Progressive Web Applications PWA</li>
          <li className='collection-item'>IndexedDB</li>
        </ul>
      </article>
    </main>
  );
};