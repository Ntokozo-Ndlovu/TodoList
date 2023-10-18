const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    name:{
        type:String,
        require:[true,'Please privide name'],
        minLength:3
    },
    description:{
        type:String,
        maxLength:20
    },
    startDate:{
        type:Date,
        require:[true,'Start todo date required']
    },
    endDate:{
        type:Date,
        require:[true,'End todo date required']
    }
})

module.exports = mongoose.model('Todo',TodoSchema);


