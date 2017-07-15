# Voting App
This repo contains a web application that uses the Express framework.

## Setup

#### Node
To get this running locally, start by installing [**NodeJS**](http://nodejs.org/download/). The Node website is very good at explaining how to do this. Once installed verify that npm (Node Package Manager) came with the installation by running npm in Terminal.

## Configure
Clone the repository, and you will have the structure in place to start. Begin by editting the package.json file.

**Don't forget to change**
* Name
* Version, if applicable
* Description
* Author

Install all listed dependencies by navigating to the repository in Terminal and running the command 

```npm install``` 

This will install [**Express**](http://expressjs.com/4x/api.html) along with the other packages in the package.json file. 


<Enter>
<Enter>
<Enter>

#### Connecting to a Database
Replace the link below with the url for your hosted DB or keep this url for the default local MySQL
```javascript
// routes/db.js
var connection = mysql.createConnection({
  connectionLimit : 100,
  host : 'localhost',
  user : 'user',
  password : 'admin',
  database : 'voting_app',
  port : 
});
```

#### Server Settings
In the root of our project you'll find a app.js file. This is the file that we will run to make our server live.

First, we require our dependencies. You'll notice I declare bodyParser, which is an Express middleware for parsing HTTP Responses and Requests.

```javascript
// app.js

// Dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
```

Next, we configure our Express application. I import the database file to this one in an effort to keep the database file nice and lean.
```javascript
// index.js

// DB Configs
var mysql = require('./db');

```

#### Run our server
To run this server, inside bin  of the project directory run 

```node www```

It will start the application and you should be able to navigate to http://localhost:3000 and see our first page.

## Make It Yours
### Defining Routes
These are Express-style routes, to see all the fancy things you can do refer to the Express docs.

To define a simple route to serve a static HTML page:
```javascript
//routes/index.js
module.exports = function(app) {
    app.get('/path', function(request, response) {
        response.sendfile('path/to.html');
    });
}
```

To define a route that writes to the response:
```javascript
// Assuming this is wrapped in the export line
    app.get('/path', function(request, response) {
        response.writeHead(200); // 200 Success Status code
        response.write(<h1>Hello World</h1>); // Writes to the body
        response.end(); // Closes the write stream
    });
```

#### Defining an API
Since making RESTful applications makes everything easy on everyone, let's define a way to interact with our model

To make a call that returns our models:
```javascript
/* routes/index.js */

module.exports = function(app) {
       
    app.get('path', function(request, response) {
        Model.find({conditions : 'in JSON'}, function(err, models) {
            response.send(models); // Sends the data in JSON in the response
        });
    });
}
```

Express also supports the other HTTP verbs like POST. 
To create a model and return them all after one is created.
```javascript
    // Assuming this is wrapped in the export after the require lines
    
	app.post('path', function (req, res) {
		Model.create({
			name : req.body.name // Value from form with field "name"
		}, function(err, model) {
			
			Model.find(function(err, models) {
				res.send(models);
			});
		});
	});
```


## Make It Pretty
We use [AngularJS](https://angularjs.org/) to receive all of the data sent from Node in the backend to give us a truly dynamic webpage it also offers us many directives to display this data on the frontend. 

### Define an Angular Controller
Angular follows the MVC pattern on the frontend. We won't have to really do anything to the model once it gets to Angular so, next up is the Controller. We define Angular controllers and export them as angular modules. 

[Angular Services](https://docs.angularjs.org/api/ng/service)

To add more functionality to our controller, we can throw in more angular services as arguments after ```$scope```

I recommend adding the ```$http``` service to make frontend wrappers for our API calls.
```javascript
var appController = angular.module('appController', []);

function appCtrl($scope, $http) {
    ...
}
```


## Testing Your Application
Making sure that our application works is an incredibly important part of developing for any platform. The entire software stack in this instance is JavaScript. This means we only need JavaScript testing libraries. 


#### Testing Node
[Mocha](http://mochajs.org//) is recommended for testing your frontend JavaScripts.

Install the package globally and it comes with a CLI. 

To run Node tests:

```./node_modules/mocha/bin/mocha ```

This will run all the test files in the project.
