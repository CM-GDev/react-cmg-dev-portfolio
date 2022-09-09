// importing react and images
import React from 'react';
import Project from '../Project';
import Card1 from '../../img/myway1.gif';
import Card2 from '../../img/giphy1.gif';
import Card3 from '../../img/techBlog.JPG';
import Card4 from '../../img/knickKnack.JPG';
import Card5 from '../../img/sequelizeORM.JPG';
import Card6 from '../../img/PWA.JPG';
import Card7 from '../../img/geoLocator.png';

// establishing variables to use in react component
const cardTitle1 = 'DriveWay-MyWay';
const cardTitle2 = 'PAGES - A Book Search Engine';
const cardTitle3 = 'CMG Tech Blog';
const cardTitle4 = 'KnickKnack Job Board';
const cardTitle5 = 'Sequelize ORM';
const cardTitle6 = 'Offline Notes';
const cardTitle7 = 'Quality of LIfe Scores';

const deployHref1 = "https://driveway-myway.herokuapp.com/";
const deployHref2 = "https://arcane-citadel-66789.herokuapp.com/";
const deployHref3 = "https://cryptic-castle-82513.herokuapp.com/";
const deployHref4 = "https://shrouded-brook-37959.herokuapp.com/";
const deployHref5 = "https://www.youtube.com/watch?v=5AhxBuj-x-o";
const deployHref6 = "https://pure-castle-29867.herokuapp.com/";
const deployHref7 = "https://ctmbr.github.io/IPGeolocator/";

const gitHub1 = "https://github.com/wonjong2/Driveway-Myway";
const gitHub2 = "https://github.com/CM-GDev/Pages-A-Book-Search-Engine";
const gitHub3 = "https://github.com/CM-GDev/CMG_TECH_BLOG";
const gitHub4 = "https://github.com/levisgaragegroupinc/KnickKnacks";
const gitHub5 = "https://github.com/CM-GDev/ORM_E-CommerceBackEnd";
const gitHub6 = "https://github.com/CM-GDev/OfflineNotes";
const gitHub7 = "https://github.com/ctmbr/IPGeolocator";

const description1 = "Worked in a team of four members to create an application that assists a user locate private driveways that may be rented by the hour. To ensure each team member had a full stack development experience, we each took a page/component or feature and built it from back to end. In this project, I took on the responsibility for the following technologies and application features: [1] Homepage including Bootstrap styling [2] Login and sign up modals with JWT technology and [3] Deployment of the application to Heroku with a working AtlasDB. For a full list of the technologies applied in the project, follow our GitHub link below";
const description2 = "In this project, I began with starter code for a fully functioning Google Books API search engine built with a RESTful API, and refactored it to be a GraphQL API built with an Apollo Server. To complete the project I [1] Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data [2] Modify the existing authentication middleware so that it works in the context of a GraphQL API [3] Deploy the application to Heroku with a MongoDB database using MongoDB Atlas";
const description3 = "This was my first full stack -front end and back end - project. I was very excited to build a site from scratch to implement lessons from my course, including [1] Configure a working Express.js API [2] Use Sequelize ORM to interact with a MySQL database [3] Utilize the express-session npm package for authentication [4] Follow the MVC paradigm to structure my files [5] Establish Express.js routes to deploy the application [6] Use Handlebars.js as the templating language";
const description4 = "This is a full stack project that includes code for the front end and back end. Three other team members and myself created an application that serves as a jobs board for small business, handyman and private individuals to share their knowledge and unique talents with others in the community. This application uses the Model Controller View approach to structure and organize the code. The template engine uses Handlebars, Sequelize as the ORM and Express-session for authentication. The database uses MySQL and JAWSDB when hosted on Heroku, and the TrustiFi Expertise email add-on for Heroku.";
const description5 = "This was my first application using Sequelize ORM to interact with a MySQL database. The purpose of the project was to build the back end unsing Express.js API for an e-commerce site by modifying starter code. Since there was no front end code, the back end routes were tested using the Insomnia API Client application. Follow my Webpage link to view a walkthrough video of the final application functioning as intended.";
const description6 = "This is my first progressive web application, PWA. It's a single-page text editor/note taker app that runs in the browser. It features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The app can be downloaded and function offline! To build the application, I started with an existing non-PWA application and implemented methods for getting and storing data to an IndexedDB database.";
const description7 = "This was my first group project for the course. Four other team members and myself created a webpage that uses two APIs to [1] Retrieve and display the user's IP address information, using FreeGeoIpAPI and [2] Use the Teleport API, to retrieve and display quality of life scores for cities from the Teleport database. Once the webpage provides the user's IP adress information, it detects the nearest Teleport city to the user's location and provides relevant quality of life scores for that city. The webpage also has a search bar for the user to retrieve quality of life scores for other cities from around the world!";


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
        <Project image={Card7} title={cardTitle7} deploy={deployHref7} gitHub={gitHub7} description={description7}/>
      </div>
    </main>
  );
}