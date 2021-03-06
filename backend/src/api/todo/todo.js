const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: {type: String, requied: true},
    done: {type: Boolean, requied: true, default: false},
    createdAt:{type: Date, default: Date.now}
})

module.exports= restful.model('Todo',todoSchema)