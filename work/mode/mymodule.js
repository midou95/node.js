var fs= require('fs')
var data='i am a hero'
fs.readdir(__dirname, (err, data) => { 
    if (err) 
      console.log(err); 
    else { 
      console.log("\nCurrent directory filenames:"); 
      files.forEach(data => { 
        console.log(data); 
      }) 
    } 
  }) 
    