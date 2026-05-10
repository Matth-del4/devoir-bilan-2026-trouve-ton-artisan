const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["x-api-key"];
  if (!authHeader) {
    return res.status(401).json({ message: "Accès non autorisé." });
  }
  if (authHeader !== process.env.API_KEY) {
    return res.status(401).json({ message: "Token invalide." });
  }
  next();
};

module.exports = authMiddleware;
