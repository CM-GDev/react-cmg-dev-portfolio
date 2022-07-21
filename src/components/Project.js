import React from 'react';

export default function Project(props) {
  return (
    
    <div class="card small hoverable col s12 m6">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src={props.image}/>
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">CMG Tech Blog<i class="material-icons right">more_vert</i></span>
            <p><a href="https://cryptic-castle-82513.herokuapp.com/" target="blank">Webpage Link</a></p><p><a href="https://github.com/CM-GDev/CMG_TECH_BLOG" target="blank">GitHub Link</a></p>
        </div>
        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">CMG Tech Blog<i class="material-icons right">close</i></span>
            <p>This was my first full stack -front end and back end - project. I was very excited to build a site from scratch to implement lessons from my course, including:
            -Configured a working Express.js API
            -Used Sequelize ORM to interact with a MySQL database
            -Utilized the express-session npm package for authentication
            -Followed the MVC paradigm to structure my files.
            -Established Express.js routes to deploy the application
            -Used Handlebars.js as the templating language</p>
        </div>
    </div>
  );
}