
const server = require("./app.js");
const { conn } = require('./db.js');

conn.sync().then(()=>{
  server.listen(3001, () => {  console.log ("%s listening at 3001")// eslint-disable-line no-console
  });

})
