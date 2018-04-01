const mongoose = require('mongoose');
const moment = require('moment-timezone');
const httpStatus = require('http-status');
const config = require('../../config');
const APIError = require('../utils/APIError');

const Schema = mongoose.Schema;

const channelSchema = new Schema({
  name: {
    type: String,
    maxlength: 128,
    unique: true,
    index: true,
    trim: true,
    required: true,
  },
  purpose: {
    type: String,
  },
  creator: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  private: {
    type: Boolean,
    default: false,
  },
  direct: {
    type: Boolean,
    default: false,
  },
  members: {
    type: [Schema.ObjectId],
  },
}, {
  timestamps: true,
});

channelSchema.method({
  transform() {
    const transformed = {};
    const fields = ['id', 'name', 'purpose', 'creator', 'private', 'createdAt', 'direct', 'members'];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});

channelSchema.statics = {
  async joinMainChannel(user) {
    const { _id } = user;
    if (!_id) throw new APIError({ message: 'An user is required to join a channel' });

    const channel = await this.findOne({ name: 'general' }).exec();
    if (channel.members.indexOf(_id) === -1) {
      channel.members.push(_id);
    }
    await channel.save();
  },

  list(user) {
    return this.find({ members: user._id }).exec();
  },

  async get(id) {
    try {
      let channel;

      if (mongoose.Types.ObjectId.isValid(id)) {
        channel = await this.findById(id).exec();
      }
      if (channel) {
        return channel;
      }

      throw new APIError({
        message: 'Channel does not exist',
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },
};

module.exports = mongoose.model('Channel', channelSchema);
