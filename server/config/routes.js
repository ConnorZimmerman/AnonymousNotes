var Notes = require('../controllers/notes');
module.exports = function(app){
	app.post('/', function(req,res){
		Notes.create(req, res);
	})

	app.get('/all', function(req,res){
		
		Notes.all(req,res);
	})
}