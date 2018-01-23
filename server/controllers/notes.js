var mongoose = require("mongoose"),
    Notes = mongoose.model('Notes');
module.exports = {
    create:function(req,res){
        console.log("cages");
        Notes.create({message: req.body.message}, function(err, note){
            console.log(note);
            return res.json({note: note.message});
        });
    },
    all:function(req,res){
        Notes.find({}).sort('-createdAt').exec(function(err,notes){
            return res.json({notes : notes});
        })
    }
}