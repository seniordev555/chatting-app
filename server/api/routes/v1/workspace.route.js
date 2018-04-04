const express = require('express');
const controller = require('../../controllers/workspace.controller');

const router = express.Router();

router.param('workspaceId', controller.load);

router
  .route('/')
  .get(controller.list);

module.exports = router;
