# Project Unite
> A React application for increasing project collaborations in organisations.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)



## General info
Users can add their projects and its properties to a database. These projects are then searchable by other users via a projects overview page. These users who are looking for projects to collaborate on, can look for projects that fit their skills profile and other needs. If they found a project they like, they can reach out to the project owner proposing a collaboration.

DEMO: https://project-unite.netlify.app/ 
(backend is hosted on Heroku, so its not very fast)

## Screenshots


## Technologies
* React - v17.0.1
* React-router-dom - v6.0.0-beta.0
* React Bootstrap - v1.3.0
* Framer Motion - v2.9.4 
* Express - v4.17.1
* MongoDB + Mongoose - v5.10.3


## Setup
To run this project, install the backend en frontend dependancies separately via npm.

Setup these two new ENV files in the frontend folder:

 .env.development
REACT_APP_API_URL= "http://localhost:5000"
REACT_APP_ENV = “dev”

.env.production
REACT_APP_API_URL = "https://project-unite.herokuapp.com"
REACT_APP_ENV = “prod”

In the backend folder, create an .env file with your MongoDB atlas URI and personal login and DB password
.env
----
ATLAS_URI = mongodb+srv://YOURLOGINNAME:YOURDBPASSWORD@unitecluster.vg8mm.gcp.mongodb.net/Unite?retryWrites=true&w=majority


## Code Examples
The step based wizard component for adding projects is made so that it can be used for other step based React applications in which user input needs to be validated, e-learning apps for example.

## Features
List of features ready and TODOs for future development
* Add a project
* Search listed projects
* Read project details

To-do list:
* Create user login and other CRUD operations
* Add user info to the project listings so people can actually reach out to project owners

