var mongoose = require('mongoose');
require('dotenv').config()


mongoose.set('useCreateIndex', true); //DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead. issue fixed.
//mongoose.connect("mongodb://localhost:27017/EmployeeDB", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected',()=>{
    console.log('DB connected...');
})

require('./employeeModel')