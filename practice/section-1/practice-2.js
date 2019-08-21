'use strict';

function collectSameElements(collectionA, collectionB) {
  var myArray=new Array();
  for(var i=0;i<collectionA.length;i++){
	  for(var j=0;j<collectionB.length;j++){
		  for(var m=0;m<collectionB[j].length;m++){
			  if(collectionA[i]===collectionB[j][m])
			  myArray.push(collectionA[i]);
		  }
	  }
  }
	return myArray;
}
