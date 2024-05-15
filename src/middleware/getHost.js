// Middleware to extract and store the host information from the request
const getHost = (req, _res, next) => {
  // Construct the host URL using the request's protocol and host headers
  const host = `${req.protocol}://${req.get("host")}`;
  // Attach the host URL to the request object for easy access in subsequent middleware or route handlers
  req.myHost = host;
  // Move to the next middleware in the chain
  next();
};

module.exports = getHost;
