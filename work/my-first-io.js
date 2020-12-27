var fs= require('fs')
var  line=fs.readFileSync(process.argv[2],'utf8')
console.log(line.toString().match(/\n/g).length)