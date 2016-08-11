var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
var crime=new Object();
var crimee=new Object();
var line_num=0;
var arr = [];
var arr1 = [];
var desc_index,year_index,primary_type,arrest_index;

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
           else if (res[i]=="Description")
           {
             desc_index = i;
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
         if(res[desc_index]=="$500 AND UNDER" || res[desc_index]=="OVER $500")
         {
           if(crime[res[year_index]] == undefined)
           {
             crime[res[year_index]]={};
                crime[res[year_index]][res[desc_index]] = 1;
           }
           else
           {
             if(crime[res[year_index]][res[desc_index]] == undefined)
             {
               crime[res[year_index]][res[desc_index]] = 1;
             }
             else
             {
             crime[res[year_index]][res[desc_index]]++;
             }
           }
         }

         ////////////////////
         if(res[primary_index]=="ASSAULT")
           {
             if(crimee[res[year_index]] == undefined)
             {
               crimee[res[year_index]]={};
                crimee[res[year_index]][res[arrest_index]] = 1;
             }
             else
             {
               if(crimee[res[year_index]][res[arrest_index]] == undefined)
               {
                 crimee[res[year_index]][res[arrest_index]] = 1;
               }
               else
               {
               crimee[res[year_index]][res[arrest_index]]++;
               }
             }
           }
     }
});

rl.on('close', function() {
for(i in crime)
{
  for(j in crime[i])
   {
    var crimedata = {};
    crimedata.description =j;
    crimedata.value = crime[i][j];
    crimedata.year = i;
    arr.push(crimedata);
  }
}
//for part2
for(var i in crimee)
{
  crimee[i].arrested=crimee[i][true];
 delete crimee[i][true];
  crimee[i].notarrested=crimee[i][false];
delete crimee[i][false];
}
  for(i in crimee)
{
  for(j in crimee[i])
   {
    var crimedataa = {};
    crimedataa.description =j;
    crimedataa.value = crimee[i][j];
    crimedataa.year = i;
    arr1.push(crimedataa);
  }
}


console.log(arr);
console.log(arr1);
var json_convert=JSON.stringify(arr);
fs.writeFile('crimes.json',json_convert);
var json_convert=JSON.stringify(arr1);
fs.writeFile('crimes2.json',json_convert);
});
