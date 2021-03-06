var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var webpagesSchema = new Schema({
    'detail': { type: String, required: false },
    'url': { type: String, required: true },
    'state':{ type: String, required: false },
    'status': {},
    'tags': [],
    'process' : { type : Boolean, default : false},
    'createdOn': { type: Date, default: Date.now },
    'updatedOn': { type: Date, default: Date.now }    
});
module.exports = mongoose.model('webpage', webpagesSchema);
