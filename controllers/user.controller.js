const User = require('../models/user.model');

exports.reginster = async (req, res) => {
  try {
    res.json(await User.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getUser = async (req, res) => {
  try {
    const searchUser = await User.findById(req.params.id);
    if(!searchUser) res.status(404).json({ message: 'Not found' });
    else res.json(searchUser);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.login = async (req, res) => {
  try {
    
    res.send( "vdbejdvijdbvifbvfrbv" );
  } catch(err) {
    res.status(500).json({ message: err });
  }
};