var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
var crime=new Object();
var line_num=0;
var Arrest_index,year_index,PrimaryType_index;
var arr=[];
//Function

//code to split and create object
const rl = readline.createInterface({
  input: fs.createReadStream('crime.csv')
});

rl.on('line', function(line) {
  //  var res=line.split(",");
    var res=line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    line_num++;
    //console.log(line_num);
    if(line_num === 1)
    {
      for(var i=0;i<res.length;i++) {
        if(res[i] == 'Primary Type') {
          PrimaryType_index=i;

        }
        if(res[i] == 'Arrest') {
          Arrest_index=i;
        }
        if(res[i] == 'Year') {
          year_index=i;
        }
      }
    }
    else
    {

      if(res[PrimaryType_index]==="ASSAULT") {
          if(crime[res[year_index]] == undefined)
          {
            crime[res[year_index]]={};
            crime[res[year_index]][res[Arrest_index]] = 1;
          }
          //console.log(res[year_index] +":"+ res[desc_index]);
           else
           {
            if(crime[res[year_index]][res[Arrest_index]] == undefined)
            {
              crime[res[year_index]][res[Arrest_index]] = 1;
            }
            else
            {
            crime[res[year_index]][res[Arrest_index]]++;
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
     var myarr={};
     myarr.description=j;
     myarr.year=i;
     myarr.value=crime[i][j];
     arr.push(myarr);

   }
 }
console.log(arr);
json_convert=JSON.stringify(arr);
fs.writeFile('myJsonTwo.json',json_convert);
});
