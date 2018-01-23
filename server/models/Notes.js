var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    NotesSchema = new Schema({
        message: String,
    }, { timestamps: true })
mongoose.model('Notes', NotesSchema);