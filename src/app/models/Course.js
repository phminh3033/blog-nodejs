const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema({
    _id: {type: Numder,},
    name: {type: String},
    description: {type: String},
    image: {type: String},
    slug: { type: String, slug: 'name', unique: true,},
    videoId: {type: String, required: true,},
  }, {
    _id: false,
    timestamps: true,
});

//Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
  deletedAt : true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);