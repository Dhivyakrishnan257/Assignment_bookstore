$ (function(){
alert('hi');
//By id
//$('#first').addClass('highlight');

//By element/ tag
//$('p').addClass('highlight');

//By class
//$('.chosen').addClass('highlight');

//By combination
//$('#first,.chosen').addClass('highlight');

//contains
//$('li:contains("Three")').addClass('highlight');

//next
//$('li:contains("Three")').next().addClass('highlight');

//previousSibling
//$('li:contains("Three")').prev().addClass('highlight');

//sibling and parent
//$('li:contains("Three")').siblings().addClass('highlight');
//$('li:contains("Three")').parent().addClass('highlight');


//$('li:nth-child(1)').addClass('highlight');

//$('p[name="mySecondPara"]').addClass('highlight');
$('p[name!="mySecondPara"]').addClass('highlight');


});
