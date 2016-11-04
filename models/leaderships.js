/**
 * Created by session1 on 11/4/16.
 */

var mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
var Schema = mongoose.Schema;


var leaderSchema = new Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String, default: '' },
    designation: { type: String, default: '' },
    abbr: { type: String, default: '' },
    description: { type: String, required: true }
}, {
    timestamps: true
});


var Leaders = mongoose.model('Leader', leaderSchema);


module.exports = Leaders;