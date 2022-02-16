const User = require("../model/User/UserSchema");
const {AuthenticationFailedException} = require("../model/Error/Errors");

const validateIntegragionKey = async (req, res, next) => {
  const integrationKey = req.headers["x-access-token"];

  if (!integrationKey)
    return res.status(401).json(new AuthenticationFailedException("No Token Provided!."));
  const user = await User.findOne({ integrationKey: integrationKey });

  if (!user) return res
      .status(403)
      .json(
        new AuthenticationFailedException("Integration key not found!.")
      );

  user.integrationKey = integrationKey;
  req.body.user = user;

  next();
};

module.exports = validateIntegragionKey;
