function countSameElements(collection) {
	var myArray=new Array();
	var myObject={};
	for(var i=0;i<collection.length;i++){
		if(collection[i] in myObject){
			myObject[collection[i]]++;
		}else{
			myObject[collection[i]]=1;
		}
	}	
	for(var Key in myObject){
		myArray.push({key:Key,count:myObject[Key]})
	}
	return myArray;
}
