var mysql=require('mysql');

var connection=mysql.createConnection({
	host:'localhost',
	port:3306,
	user:'root',
	password:'9753',
	database:'chat_db'
});

connection.connect(function(err){
	if(err){
		console.error('mysql connection error');
		console.error(err);
		throw err;
	}
})

exports.select=function(callBack){
	var query=connection.query('select * from user_info', function(err, rows){
		callBack(rows);
		console.log('mysql(select) : '+rows);
	});
}

exports.insert=function(data){
	var insert_data={'regId':data.device_id};
	var query=connection.query('insert into regid set ?', insert_data, function(err, result){
		if(err){
			console.error(err);
			throw(err);
		}
	});
	return query;
}