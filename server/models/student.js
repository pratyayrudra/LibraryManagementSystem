var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    studentname:{
        type: String,
        require:true
    },
    department:{
        type: String
    },
    phoneNo:{
        type: Number
    },
    year:{
        type: String
    },
    roll:{
        type: Number
    },
    username:{
    }
});

module.exports = mongoose.model('Student', StudentSchema);