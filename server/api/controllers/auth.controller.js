const httpStatus = require('http-status');
const moment = require('moment-timezone');
const User = require('../models/user.model');
const RefreshToken = require('../models/refreshToken.model');
const Workspace = require('../models/workspace.model');
const Channel = require('../models/channel.model');
const config = require('../../config');

const generateTokenResponse = (user, accessToken) => {
  const tokenType = 'Bearer';
  const refreshToken = RefreshToken.generate(user).token;
  const expiresIn = moment().add(config.jwtExpirationInterval, 'minutes');
  return {
    tokenType, accessToken, refreshToken, expiresIn,
  };
};

exports.register = async (req, res, next) => {
  try {
    const workspaceId = req.body.workspace;
    const workspace = await Workspace.findById(workspaceId).exec();
    const user = await (new User(req.body)).save();
    await Channel.joinMainChannel(workspace._id, user);
    const userTransformed = user.transform();
    const token = generateTokenResponse(user, user.token());
    res.status(httpStatus.CREATED);
    return res.json({ token, user: userTransformed });
  } catch (error) {
    return next(User.checkDuplicateEmail(error));
  }
};

exports.login = async (req, res, next) => {
  try {
    const workspaceId = req.body.workspace;
    const workspace = await Workspace.findById(workspaceId).exec();
    const { user, accessToken } = await User.findAndGenerateToken(workspace._id, req.body);
    const token = generateTokenResponse(user, accessToken);
    const userTransformed = user.transform();
    return res.json({ token, user: userTransformed });
  } catch (error) {
    return next(error);
  }
};

exports.refresh = async (req, res, next) => {
  try {
    const { email, refreshToken } = req.body;
    const refreshObject = await RefreshToken.findOneAndRemove({
      userEmail: email,
      token: refreshToken,
    });
    const { user, accessToken } = await User.findAndGenerateToken({ email, refreshObject });
    const response = generateTokenResponse(user, accessToken);
    return res.json(response);
  } catch (error) {
    return next(error);
  }
};
