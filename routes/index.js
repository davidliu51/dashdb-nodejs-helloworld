exports.listSysTables = function(ibmdb,connString) {
    return function(req, res) {

	   	   
       ibmdb.open(connString, function(err, conn) {
			if (err ) {
			 res.send("error occurred " + err.message);
			}
			else {
				conn.query("SELECT FIRST_NAME, LAST_NAME, EMAIL, WORK_PHONE from GOSALESHR.employee FETCH FIRST 10 ROWS ONLY", function(err, tables, moreResultSets) {
							
							
				if ( !err ) { 
					res.render('tablelist', {
						"tablelist" : tables,
						"tableName" : "10 rows from the GOSALESHR.EMPLOYEE table",
						"message": "Congratulations. Your connection to dashDB is successful."
						
					 });

					
				} else {
				   res.send("error occurred " + err.message);
				}

				/*
					Close the connection to the database
					param 1: The callback function to execute on completion of close function.
				*/
				conn.close(function(){
					console.log("Connection Closed");
					});
				});
			}
		} );
	   
	}
};

exports.listTourismTables = function(ibmdb,connString) {
    return function(req, res) {


        ibmdb.open(connString, function(err, conn) {
            if (err ) {
                res.send("error occurred " + err.message);
            }
            else {
                conn.query("SELECT MODE, TIME, VISITORFROM, COUNTRY, VISITORSAMOUNT from DASH100282.TOURISM2016 FETCH FIRST 100 ROWS ONLY", function(err, tables, moreResultSets) {


                    if ( !err ) {
                        res.render('tablelist', {
                            "tablelist" : tables,
                            "tableName" : "100 rows from the DASH100282.TOURISM2016 table",
                            "message": "Congratulations. Your connection to dashDB is successful."

                        });


                    } else {
                        res.send("error occurred " + err.message);
                    }

					/*
					 Close the connection to the database
					 param 1: The callback function to execute on completion of close function.
					 */
                    conn.close(function(){
                        console.log("Connection Closed");
                    });
                });
            }
        } );

    }
};

exports.listLocalMysqlTables = function(ibmdb,connString) {
    return function(req, res) {


        ibmdb.createConnection(connString, function(err, conn) {
            if (err ) {
                res.send("error occurred " + err.message);
            }
            else {
                conn.connect();
                conn.query("SELECT MODE, TIME, VISITORFROM, COUNTRY, VISITORSAMOUNT from tourism_nova_scotia_visitation_jan_2006_-_june_2017 LIMIT 10 OFFSET 0", function(err, tables, moreResultSets) {


                    if ( !err ) {
                        res.render('tablelist', {
                            "tablelist" : tables,
                            "tableName" : "100 rows from the tourism_nova_scotia_visitation_jan_2006_-_june_2017 table",
                            "message": "Congratulations. Your connection to mysql is successful."

                        });


                    } else {
                        res.send("error occurred " + err.message);
                    }

					/*
					 Close the connection to the database
					 param 1: The callback function to execute on completion of close function.
					 */
                    conn.close(function(){
                        console.log("Connection Closed");
                    });
                });
            }
        } );

    }
};