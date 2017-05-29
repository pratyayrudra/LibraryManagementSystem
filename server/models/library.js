var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibrarySchema = new Schema({

    name : {
        type: String
    },
    author:{
        type: String
    },
    publisher:{
        type: String
    },
    pages:{
        type: Number
    },
    image_url:{
		type: String
	}
});

module.exports = mongoose.model('Library', LibrarySchema);