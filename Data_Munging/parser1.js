const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('Crime.csv')
});

rl.on('line',function (line) {
  console.log('Line from file:', line);
});


var row= line.split("\n");
var header=row[0].split(",");
for(i=0;i<header.length;i++)
{
if(header[i]==="PrimaryType"){
  primarytype_index=i;
}
if(header[i]==="Description"){
   description_index=i;
}
if(header[i]==="Year"){
  year_index=i;
}

}
