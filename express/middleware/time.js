function checkWorkingHours(req, res, next) {
  const currentDate = new Date();
  const day = currentDate.getDay(); 
  const hour = currentDate.getHours();

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next(); 
  } else {
    res.status(403).send('The web application is only available during working hours (Monday to Friday, 9 AM to 5 PM).');
  }
}

module.exports = checkWorkingHours;
