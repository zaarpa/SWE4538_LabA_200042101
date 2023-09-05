function logRequest(req, res, next) {
  console.log("Request received for: ${req.method} ${req.url}");
  next();
}

function apiKeyMiddleware(req, res, next) {
  const apiKey = req.query.apiKey;
  if (apiKey === "123456789") {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
}

function notFoundMiddleware(req, res, next) {
  res.status(404).json({ error: "Not Found" });
}
module.exports = { logRequest, apiKeyMiddleware, notFoundMiddleware };
