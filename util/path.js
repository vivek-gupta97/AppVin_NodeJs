const path= require('path');

module.exports=path.dirname(require.main.filename);
//this gives he path of current main module i.e. app.js----->gives the path of app.js