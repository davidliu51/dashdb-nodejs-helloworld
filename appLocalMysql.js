//------------------------------------------------------------------------------
// Copyright 2016 IBM Corp. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//------------------------------------------------------------------------------


var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'abcd1234',
    database : 'NovaScotiaTourism2016'
});

connection.connect();

connection.query('SELECT * from tourism_nova_scotia_visitation LIMIT 10', function(err, rows, fields) {
    if (!err) {
        console.log('The solution is: ', rows);
    }
    else {
        console.log('Error while performing Query.', err);
    }

    /*
     Close the connection to the database
     param 1: The callback function to execute on completion of close function.
     */
    connection.end(function(){
        console.log("Connection Closed");
    });
});


