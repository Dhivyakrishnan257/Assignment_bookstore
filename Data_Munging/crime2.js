var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
var crime=new Object();
var line_num=0;
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

  for(i in crime)
  {
    crime[i].arrested=crime[i][true];
    delete crime[i][true];
    crime[i].notarrested=crime[i][false];
    delete crime[i][false];
  }
  console.log(crime);
  json_convert=JSON.stringify(crime);
  fs.writeFile('crime2.json',json_convert);
  console.log("Completed job");
});
