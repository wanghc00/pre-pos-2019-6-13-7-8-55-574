'use strict';

function collectSameElements(collectionA, collectionB) {
  var myArray=new Array();
	for(var i=0;i<collectionA.length;i++){
		for(var j=0;j<collectionB[0].length;j++){
			for(var m=0;m<collectionB.length;m++){
				if(collectionA[i]==collectionB[m][j]){
					myArray.push(collectionA[i]);
				}
			}
		}
	}
	return myArray;
}
