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
