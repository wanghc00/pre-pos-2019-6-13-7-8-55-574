'use strict';

function countSameElements(collection) {
  var myArray=new Array();
	var myObject={};
	var findObj=0;
	for(var i=0;i<collection.length;i++){
    if(collection[i].indexOf("-") != -1||collection[i].indexOf("[")!= -1||collection[i].indexOf(":") != -1){
      var arr0 = collection[i].replace(/[^a-z]+/ig,"");
      var arr1 = collection[i].replace(/[^0-9]/ig, "");
      for(var key in myObject){
        findObj=0;
        if(key==arr0){
          myObject[key]+=parseInt(arr1);
          findObj=1;
          break;
        }
      }
      if(findObj==0){
        myObject[arr0]=parseInt(arr1);
      }
    }else{
      for(var key in myObject){
        findObj=0;
        if(key==collection[i]){
          myObject[key]++;
          findObj=1;
          break;
        }
      }
      if(findObj==0){
        myObject[collection[i]]=1;
      }
    }	
  }

	for(var myKey in myObject){
		myArray.push({name:myKey,summary:myObject[myKey]})
	}
	return myArray;
}
