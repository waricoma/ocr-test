var okrabyte = require("okrabyte");
okrabyte.decodeFile(`${__dirname}/hello_world.png`, (err, data)=>{
  console.log(data); // Hello World!
});
