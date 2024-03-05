const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchUser');


const JWT_SECRET = 'Harryisagoodb$oy';

// Route 1 create a user using: POST "/api/auth/createuser". No login required

router.post('/createuser'
  , [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'password must be atleast 5 characters').isLength({ min: 5 }),
  ]
  , async (req, res) => {
    // if there are error return bad requests and the errors
    console.log(req.body)
    // user.save()

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // check wheather the user with this email exists already
    try {
    //  create a new user
      let user = await User.findOne({ email: req.body.email })
       if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exists" })
       }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      
    
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      })

      // .then(user => res.json(user))
      // .catch(err=>{

      //   console.log(err)
      //   res.json({error: 'Please enter a unique value for email', message : err.message})
      // })
      const data = {
        user: {
          id : user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      // console.log(jwtData);
      // res.json(user);
      res.json({authtoken});
      // res.send(req.body);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error")
    }

  })
  // Route 2 Authenticate a user using: POST "/api/auth/login". No login required
  router.post('/login'
  , [
    
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'password cannot be blank').exists(),
    
  ]
  , async (req, res) => {
//  if there are errors , return bad request  and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;
    try{
     let user = await User.findOne({email});
     if(!user){
      return res.status(400).json({error: "Please try to login with correct credentials"});
     }
     const passwordCompare = await bcrypt.compare(password, user.password);
     if(!passwordCompare){
      return res.status(400).json({error: "Please try to login with correct credentials"});
     }

     const data = {
      user: {
        id : user.id
      }
     }
     const authtoken = jwt.sign(data, JWT_SECRET);
     res.json({authtoken})
    }catch(error){
      console.error(error.message);
      res.status(500).send("Internal server error")
    }

  })

// Route 3 get logged in user details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser
  // ,
  //  [
    
  //   body('email', 'Enter a valid email').isEmail(),
  //   body('password', 'password cannot be blank').exists(),
    
  // ]
  , async (req, res) => {
try{

  
  userId = req.user.id;
const user = await User.findById(userId).select("-password");
res.send(user);
}catch(error){
  console.error(error.message);
  res.status(500).send("Internal server error")
}
})
module.exports = router
