const Ads = require('../models/ads.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Ads.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getOne = async (req, res) => {
  try {
    const searchAds = await Ads.findById(req.params.id);
    if(!searchAds) res.status(404).json({ message: 'Not found' });
    else res.json(searchAds);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.postOne = async (req, res) => {
  try {
    const { title, content, date, picture, price, location, seller } = req.body;
    const newAds = new Ads({ 
      title: title, 
      content: content, 
      date: date, 
      picture: picture, 
      price: price, 
      location: location, 
      seller: seller });
    await newAds.save();
    res.send( newAds );
  } catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.putOne = async (req, res) => {
  const { title, content, date, picture, price, location, seller } = req.body;
  try {
    const putAds = await Ads.findById(req.params.id);
    if(putAds) {
      putAds.title = title;
      putAds.content = content;
      putAds.date = date;
      putAds.picture = picture;
      putAds.price = price;
      putAds.location = location; 
      putAds.seller = seller;
      await putAds.save();
      res.send( putAds );
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const delAds = await Ads.findById(req.params.id);
    if(delAds) {
      await Ads.deleteOne({ _id: req.params.id });
      res.send( delAds );
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! to repair
exports.searchOne = async (req, res) => {
  try {
    const searchAds = await Ads.findById(req.params.id);
    if(!searchAds) res.status(404).json({ message: 'Not found' });
    else res.json(searchAds);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};