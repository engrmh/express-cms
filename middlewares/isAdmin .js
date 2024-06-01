module.exports.isAdminMiddleware = async (req, res, next) => {
  const isAdmin = req.user.role === "ADMIN";

  if (isAdmin) {
    return next();
  }

  return res.status(403).json({ message: "Access Denied" });
};
