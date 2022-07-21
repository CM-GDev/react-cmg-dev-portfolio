// importing react and images
import React from 'react';
import Project from '../Project';
import Card1 from '../../img/techBlog.JPG';
import Card2 from '../../img/knickKnack.JPG';
import Card3 from '../../img/sequelizeORM.JPG';
import Card4 from '../../img/PWA.JPG';
import Card5 from '../../img/geoLocator.png';
import Card6 from '../../img/weather.JPG';

// establishing variables to use in react component
const cardTitle1 = 'CMG Tech Blog';
const cardTitle2 = 'KnickKnack Job Board';
const cardTitle3 = 'Sequelize ORM';
const cardTitle4 = 'Offline Notes';
const cardTitle5 = 'Quality of LIfe Scores';
const cardTitle6 = 'Weather Dashboard';

const deployHref1 = "https://cryptic-castle-82513.herokuapp.com/";
const deployHref2 = "https://shrouded-brook-37959.herokuapp.com/";
const deployHref3 = "https://www.youtube.com/watch?v=5AhxBuj-x-o";
const deployHref4 = "https://pure-castle-29867.herokuapp.com/";
const deployHref5 = "https://ctmbr.github.io/IPGeolocator/";
const deployHref6 = "https://cm-gdev.github.io/Server-SideAPIs_Weather-Dashboard/";

const gitHub1 = "https://github.com/CM-GDev/CMG_TECH_BLOG";
const gitHub2 = "https://github.com/levisgaragegroupinc/KnickKnacks";
const gitHub3 = "https://github.com/CM-GDev/ORM_E-CommerceBackEnd";
const gitHub4 = "https://github.com/CM-GDev/OfflineNotes";
const gitHub5 = "https://github.com/ctmbr/IPGeolocator";
const gitHub6 = "https://github.com/CM-GDev/Server-SideAPIs_Weather-Dashboard";

const description1 = "This was my first full stack -front end and back end - project. I was very excited to build a site from scratch to implement lessons from my course, including [1] Configured a working Express.js API [2] Used Sequelize ORM to interact with a MySQL database [3] Utilized the express-session npm package for authentication [4] Followed the MVC paradigm to structure my files [5] Established Express.js routes to deploy the application [4] Used Handlebars.js as the templating language";
const description2 = "This is a full stack project that includes code for the front end and back end. Three other team members and myself created an application that serves as a jobs board for small business, handyman and private individuals to share their knowledge and unique talents with others in the community. This application uses the Model Controller View approach to structure and organize the code. The template engine uses Handlebars, Sequelize as the ORM and Express-session for authentication. The database uses MySQL and JAWSDB when hosted on Heroku, and the TrustiFi Expertise email add-on for Heroku.";
const description3 = "This was my first application using Sequelize ORM to interact with a MySQL database. The purpose of the project was to build the back end unsing Express.js API for an e-commerce site by modifying starter code. Since there was no front end code, the back end routes were tested using the Insomnia API Client application. Follow my Webpage link to view a walkthrough video of the final application functioning as intended.";
const description4 = "This is my first progressive web application, PWA. It's a single-page text editor/note taker app that runs in the browser. It features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The app can be downloaded and function offline! To build the application, I started with an existing non-PWA application and implemented methods for getting and storing data to an IndexedDB database.";
const description5 = "This was my first group project for the course. Four other team members and myself created a webpage that uses two APIs to [1] Retrieve and display the user's IP address information, using FreeGeoIpAPI and [2] Use the Teleport API, to retrieve and display quality of life scores for cities from the Teleport database. Once the webpage provides the user's IP adress information, it detects the nearest Teleport city to the user's location and provides relevant quality of life scores for that city. The webpage also has a search bar for the user to retrieve quality of life scores for other cities from around the world!";
const description6 = "In this homework assignment, I implemented the use of a third-party API for the first time. As the name suggests, the webpage retrieves and displays weather forcast for any US city searched by the user. The webpage also has a search history area for the user to use.";

// exporting react component
export default function AboutMe() {
  return (
    <main className='container'>
      <h3 className="blue-text text-darken-1">Portfolio</h3>
      <p>Click on a card to reveal a description of the project. To view a full list of my project repositories, click on the GitHub link at the bottom of the page.</p>
      <div className='row'>
        <Project image={Card1} title={cardTitle1} deploy={deployHref1} gitHub={gitHub1} description={description1}/>
        <Project image={Card2} title={cardTitle2} deploy={deployHref2} gitHub={gitHub2} description={description2} />
        <Project image={Card3} title={cardTitle3} deploy={deployHref3} gitHub={gitHub3} description={description3}/>
        <Project image={Card4} title={cardTitle4} deploy={deployHref4} gitHub={gitHub4} description={description4}/>
        <Project image={Card5} title={cardTitle5} deploy={deployHref5} gitHub={gitHub5} description={description5}/>
        <Project image={Card6} title={cardTitle6} deploy={deployHref6} gitHub={gitHub6} description={description6}/>
      </div>
      
    </main>
  );
}