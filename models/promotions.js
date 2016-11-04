/**
 * Created by session1 on 11/4/16.
 */

var mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
var Schema = mongoose.Schema;
var Currency = mongoose.Types.Currency;


var promoSchema = new Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String, default: '' },
    label: { type: String, default: '' },
    price: { type: Currency, default: '' },
    description: { type: String, required: true }
}, {
    timestamps: true
});


var Promotions = mongoose.model('Promotion', promoSchema);


module.exports = Promotions;