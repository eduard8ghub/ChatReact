

module.exports = (req, res, next) => {
  if(req.method === 'OPTIONS') {
      return next();
  }

  try {
      const token = req.headers.authorization.split(' ')[1];
      console.log(token);


  } catch (e) {
      
  }

};