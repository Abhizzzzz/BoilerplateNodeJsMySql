const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')
const models = require("../models/model");
const Users = models.user;

/* Models */

// start user signup function 

let get_users = (limit) =>{
  return Users.findAll({limit: limit}).then((users) => {
    // console.log(users);
    if (users) {
      console.log(users);
      return Promise.resolve(users);
    }
    else {
      return Promise.reject(users);
    }
  });
}

get_users(2);

let signUpFunction = (req, res) => {

  

}// end user signup function 

// start of login function 
let loginFunction = (req, res) => {
    
}


// end of the login function 


let logout = (req, res) => {
  
} // end of the logout function.


module.exports = {

    signUpFunction: signUpFunction,
    loginFunction: loginFunction,
    logout: logout

}// end exports