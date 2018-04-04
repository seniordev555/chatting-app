const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workspaceSchema = new Schema({
  fullName: {
    type: String,
    trim: true,
    required: true,
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
};

module.exports = mongoose.model('Workspace', workspaceSchema);
