var batwing={
  status:"Ready",
  rescueBatman:function()
  {
    document.write("Locating his transponder......initiating launch");
  }
}
/*
if(batwing.status === "Ready")
{
  batwing.rescueBatman();
}
*/
var utilities={
  printAllMembers:function(targetObject){
    for(i in targetObject){
      document.write("<br />"+targetObject[i]);
    }
  }
}
//utilities.printAllMembers(batwing);
/*
var i_am_empty={};
utilities.printAllMembers(i_am_empty);
*/

var planet={
  id:257,
  name:"Dhivya krishnan",
  faction:{
    factionId:2,
    Name:"yan",
    notification:function(){
      document.write("Yan perfomance always good!");
    }
  },
  cities:[
    {locationId:15, name:"Xiao lu"},
    {locationId:16, name:"Jiwen kai"},
    {locationId:17, name:"Qi yi"}
  ]
};

//planet.faction.notification();
//document.write(planet.cities[2].name);
/*
document.write("<br />"+planet.name);
planet.name="Lu tian Xing";
document.write("<br />"+planet.name);
*/

/*
var z=planet;
document.write(z.name);
*/
/*
if(typeof planet.defense==="undefined"){
  planet.defense="Aaron yan"
}
document.write(planet.defense);
*/

/*
for(member in planet)
{
  document.write("<br />"+member+" ==>"+planet[member]);
}
*/

function car(make,model,year)
{
  this.make=make;
  this.model=model;
  this.year=year;
}
var myCar=new car("Eagle","Talon TSi",1993);
var myOtherCar=new car("Dodge","Dart",1971);

alert(myCar.model);
alert(myOtherCar.model);
