exports.showContracts = function (req, res, next) {
	req.getConnection(function (err, connection) {
		if (err)
			return next (err);
		var query = "SELECT * FROM Contracts";
		connection.query(query, [], function (err, results) {
			if (err){
				return next(err);
			};
			res.render('Contracts',{
				Contracts:results;
			});
		});
	});
};
exports.addContracts = function (req, res, next) {
	req.getConnection(function (err, connection) {
		if (err)
			return next(err);
		var input = JSON.parse(JSON.stringify(req.body));
		var data = {
			Freelancer_name : input.Freelancer_name,
			Company_placed : input.Company_placed,
			Start_date : input.Start_date,
			End_date : input.End_date,
			Consultant : input.Consultant
		};
		var query = "insert into Contracts set ?";
		connection.query(query, data, function (err, results) {
			if (err)
				console.log("Error inserting : %s ", err);
			res.redirect("/add_Contracts");
		});
	});
};
exports.getContracts = function (req, res, next) {
	var id = req.parse.id;
		req.getConnection(function (err, connection) {
			var query = "SELECT * FROM Contracts WHERE id = ?";
			connection.query(query, [id], function (err, rows) {
				if (err){
					console.log("Error Selecting : %s ", err);
				};
			var query = "SELECT * FROM Contracts";
			connection.query(query,[id], function (err, Contracts) {
				if (err){
					console.log('Contracts');
					console.log("Error Selecting : %s ", err);
				};
				res.render('edit_Contracts',{page_page:'Edit Customers - Node.js', Contracts:Contracts, data: rows[0]});
			});	
		});
	});
};
exports.updateContracts = function (req, res, next) {
	var data = JSON.parse(JSON.stringify(req.body));
	var id = req.params.id;
	var input = JSON.parse(JSON.stringify(req.body));
	var data = {
			Freelancer_name : input.Freelancer_name,
			Company_placed : input.Company_placed,
			Start_date : input.Start_date,
			End_date : input.End_date,
			Consultant : input.Consultant
		};
	req.getConnection(function (err, connection) {
		var query = "UPDATE Contracts SET ? WHERE id = ?";
		connection.query(query,[data, id], function (err, rows) {
			if (err){
				console.log("Error Updating : %s ", err);
			};
			res.redirect('/Contracts');
		});
	});
};
exports.deleteContracts = function (req, res, next) {
	var id = req.params.id;
		req.getConnection(function (err, connection) {
			if (err)
				return next(err);
		var query = "DELETE FROM Contracts WHERE id = ?";
		connection.query(query,[id], function (err, rows) {
			if (err){
				console.log("Error Selecting : %s ", err );
			};
			res.redirect('/Contracts');
		});			
	});
};






















exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM products WHERE id = ?', [id], function(err,rows){
			if(err){
    			console.log("Error Selecting : %s ",err );
			}
			res.redirect('/products');
		});
	});
};


