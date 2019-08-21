'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result=new Array();
  var countElements={};
  for(var i=0;i<collectionA.length;i++){
    if(collectionA[i].replace(/[0-9a-z]/ig,"") != ""){
      let argChar=collectionA[i].replace(/[^a-z]/ig,"");
      let argNum=parseInt(collectionA[i].replace(/[^0-9]/ig,""));
      if(argChar in countElements){
        countElements[argChar]+=argNum;
      }else{
        countElements[argChar]=argNum;
      }
    }else{
      if(collectionA[i] in countElements){
        countElements[collectionA[i]]++;
      }else{
        countElements[collectionA[i]]=1;
      }
    }
  }
  for(var Key in countElements){
		result.push({key:Key,count:countElements[Key]})
	}

  var  collectionB = objectB.value;
  for (var i = 0;i < result.length;i++)
  {

    for (var j = 0;j<collectionB.length;j++)
    {
      if (result[i].key == collectionB[j])
      {
        var temp = result[i].count % 3;
        var  a = (result[i].count - temp) / 3;
        result[i].count = result[i].count - a;
      }
    }
  }
  return result;
}
