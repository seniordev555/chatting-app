const _ = require('lodash');
const httpStatus = require('http-status');
const User = require('../models/user.model');
const Channel = require('../models/channel.model');
const Workspace = require('../models/workspace.model');
const { handler: errorHandler } = require('../middlewares/error');

exports.load = async (req, res, next, id) => {
  try {
    const workspace = await Workspace.get(id);
    req.locals = { workspace };
    return next();
  } catch (error) {
    return errorHandler(error, req, res);
  }
};

exports.list = async (req, res, next) => {
  try {
    const workspaces = await Workspace.list(req.user);
    const transformedWorkspaces = workspaces.map(workspace => workspace.transform());
    res.json(transformedWorkspaces);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const userParams = {
      email: req.body.adminEmail,
      password: req.body.adminPassword,
      username: req.body.adminEmail.substr(0, req.body.adminEmail.indexOf('@')),
      role: 'admin',
    };
    const admin = await (new User(userParams)).save();
    const workspaceParams = _.pick(req.body, ['fullName', 'displayName']);
    workspaceParams.admin = admin._id;
    const workspace = await (new Workspace(workspaceParams)).save();
    Channel.createMainChannel(workspace);
    res.status(httpStatus.CREATED);
    return res.json({ workspace });
  } catch (error) {
    return next(Workspace.checkDuplicateName(error));
  }
};
