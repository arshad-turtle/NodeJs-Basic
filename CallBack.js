let fs  = require('fs')

fs.writeFileSync('out.txt',"Hello world")
console.log("after write operation should get printed");

fs.writeFile('out.txt',"Hello world",(err) => {
    console.log("This is Printed after wrting to file is completed");
})
let myLoggerApi = function(logMessage,)