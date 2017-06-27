var dbArr=[
		{name:"prod_1", id:"asdf454ffg"},
		{name:"prod_2", id:"asd54ffg"},
		{name:"prod_3", id:"as4g6uu64ffg"}
	];
function DataBaseObj(){
	this.nameDB=dbArr;
	this.ShowAllDB = function(){
		console.log(this.nameDB);
	}
	this.AddNewObj = function(newObjToDB){
		dbArr.push({name:newObjToDB.name, id:newObjToDB.id});
	}
	this.AddNewObjValue = function(name, id){
		var newObj = {};
		newObj["name"] = name;
		newObj["id"] = id;
		dbArr.push(newObj);
	}
	this.GetAllObj = function(){
		return dbArr;
	}
}
function NewRowForDB(name, id){
	this.name = name;
	this.id = id;
}
var DBaseObj = new DataBaseObj();