const express = require('express');
const session = require('express-session');

const router = express.Router();

function checkEmptyFields(req,res){
  if (Object.keys(req.body).some(key => req.body[key] === '')){
    res.status(400);
    res.send('please fill in all fields!');
    return true;
  }
  return false;
}

/**
 * Creates a new user with username and password
 * @name POST/api/users
 */
router.post('/', async (req,res) => {
  if (checkEmptyFields(req,res)){
    return
  }
  const user = await Users.usernameTaken(req.body.username); // TODO make function to check of username is taken
  if(user){
    res.status(404);
    res.send("username already exists: " + req.body.username);
  }
  else if (req.body.username.includes(" ") || req.body.username.includes(",")){ // TODO use regex
    res.status(404);
    res.send("invalid characters are used");
  }
  else if (req.body.password1 != req.body.password2){
    res.status(400);
    res.send("please input matching passwords!");
  }
  else if (req.body.password1.length < 4 || req.body.password1.length > 12){
    res.status(400);
    res.send("please use a password with a length between 4 and 12 characters");
  }
  
  else{
    // adds user to database
    await Users.addUser(req.body.username, req.body.password1); // TODO make this function for database insertion

    res.status(201);
    res.send("User created: " + req.body.username);
  }
});

module.exports = router;