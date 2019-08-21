'use strict';

function countSameElements(collection) {
  var result=new Array();
  var countElements={};
  for(var i=0;i<collection.length;i++){
    if(collection[i].replace(/[0-9a-z]/ig,"") != ""){
      let argChar=collection[i].replace(/[^a-z]/ig,"");
      let argNum=parseInt(collection[i].replace(/[^0-9]/ig,""));
      if(argChar in countElements){
        countElements[argChar]+=argNum;
      }else{
        countElements[argChar]=argNum;
      }
    }else{
      if(collection[i] in countElements){
        countElements[collection[i]]++;
      }else{
        countElements[collection[i]]=1;
      }
    }
  }
  for(var Key in countElements){
		result.push({name:Key,summary:countElements[Key]})
	}
	return result;
}
