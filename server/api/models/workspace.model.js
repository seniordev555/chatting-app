const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../utils/APIError');
const Schema = mongoose.Schema;

const workspaceSchema = new Schema({
  fullName: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  displayName: {
    type: String,
    trim: true,
  },
  admin: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

workspaceSchema.method({
  transform() {
    const transformed = {};
    const fields = ['id', 'fullName', 'displayName', 'admin', 'createdAt'];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});

workspaceSchema.statics = {
  checkDuplicateName(error) {
    if (error.name === 'BulkWriteError' && error.code === 11000) {
      return new APIError({
        message: 'Full name already exists',
        errors: [],
        status: httpStatus.CONFLICT,
        isPublic: true,
        stack: error.stack,
      });
    }
    return error;
  },
};

module.exports = mongoose.model('Workspace', workspaceSchema);
