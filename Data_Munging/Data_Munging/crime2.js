var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
var crime=new Object();
var line_num=0;
var arrformat = [];
var primary_index,year_index,arrest_index;

var instream = fs.createReadStream('crime.csv');
var outstream = new stream;
var rl = readline.createInterface(instream,outstream);

rl.on('line', function(line) {
     var res=line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
     line_num++;

     if(line_num === 1)
     {
         for(i=0;i<res.length;i++)
         {
           if(res[i]=="Year")
           {
             year_index = i;
           }
           else if (res[i]=="Primary Type")
           {
             primary_index = i;
           }
           else if(res[i]=="Arrest")
           {
             arrest_index=i;
           }
         }
     }
     else
     {
         if(res[primary_index]=="ASSAULT")
         {
           if(crime[res[year_index]] == undefined)
           {
             crime[res[year_index]]={};
              crime[res[year_index]][res[arrest_index]] = 1;
           }
           else
           {
             if(crime[res[year_index]][res[arrest_index]] == undefined)
             {
               crime[res[year_index]][res[arrest_index]] = 1;
             }
             else
             {
             crime[res[year_index]][res[arrest_index]]++;
             }
           }
         }

     }
});


rl.on('close', function() {
  for(var i in crime)
  {
    crime[i].arrested=crime[i][true];
   delete crime[i][true];
    crime[i].notarrested=crime[i][false];
  delete crime[i][false];
  }



  for(i in crime)
  {
    for(j in crime[i])
     {
      var crimedata = {};
      crimedata.description =j;
      crimedata.value = crime[i][j];
      crimedata.year = i;
      arrformat.push(crimedata);
    }
  }



  console.log(arrformat);
  var json_convert=JSON.stringify(arrformat);
  fs.writeFile('crimes2.json',json_convert);
});
