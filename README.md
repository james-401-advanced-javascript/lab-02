# LAB - 02

## Classes, Inheritance, Functional Programming

### Author: James Dunn

### Links and Resources
* [submission PR](https://github.com/james-401-advanced-javascript/lab-02/pull/1)
* [travis](https://travis-ci.com/james-401-advanced-javascript/lab-02)
* [front-end](https://jamesdunn-lab-02.herokuapp.com)

#### Documentation
* [jsdoc](https://jamesdunn-lab-02.herokuapp.com/docs)

### Modules
#### `validator.js`
#### `vehicles.js`
#### `list.js`

##### Exported Values and Methods
###### `Vehicle`
###### `List`
###### `Validator`


### Setup
#### `.env` requirements
* `PORT` - 3000

#### Running the app
* `npm start`
* Endpoint: `index.js`
  * Returns an express server.
  
#### Tests
* How do you run tests?
* `npm test`

#### UML
![UML](./images/list-uml.png)

****
### Should validator.js export the class, or export an instance of the class? What are the pros and cons of each choice?
* It should export an instance. The pro of doing this is that you can use it right away, where as you can't use the class by itself if it hasn't been instantiated. The con of doing it this way is that you can't create other instance of the original class by exporting an instance. Only clones of the instance. Those are the pros and cons of each respectively.