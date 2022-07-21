import React from 'react';
import Project from '../Project';
import TechBlogImg from '../../img/page1.JPG'

const cardTitle1 = 'CMG Tech Blog';
const cardTitle2 = 'CMG Tech Blog';
const cardTitle3 = 'CMG Tech Blog';
const cardTitle4 = 'CMG Tech Blog';
const cardTitle5 = 'CMG Tech Blog';
const cardTitle6 = 'CMG Tech Blog';

const deployHref1 = "https://cryptic-castle-82513.herokuapp.com/";


const gitHub1 = "https://github.com/CM-GDev/CMG_TECH_BLOG";

const description1 = `This was my first full stack -front end and back end - project. I was very excited to build a site from scratch to implement lessons from my course, including:
-Configured a working Express.js API
-Used Sequelize ORM to interact with a MySQL database
-Utilized the express-session npm package for authentication
-Followed the MVC paradigm to structure my files.
-Established Express.js routes to deploy the application
-Used Handlebars.js as the templating language`









export default function AboutMe() {
  return (
    <main className='container'>
      <h3 className="blue-text text-darken-1">Portfolio</h3>
      <p>Click on a card to reveal a description of the project. To view a full list of my project repositories, click on the GitHub link at the bottom of the page.</p>
      <div className='row'>
        <Project image={TechBlogImg} title={cardTitle1} deploy={deployHref1} gitHub={gitHub1} description={description1}/>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
      
    </main>
  );
}