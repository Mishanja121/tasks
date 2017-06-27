var DBaseObj = new DataBaseObj();
DBaseObj.AddNewObjValue("blabla","asdg4dh");
DBaseObj.ShowAllDB();
DBaseObj.AddNewObj(new NewRowForDB("blabla","asdg4dh"));

var a = DBaseObj.GetAllObj();
console.log(DBaseObj.GetAllObj());

function ModelDataClass(){
	this.GetValue = function(objValue){
		var obj = DBaseObj.GetAllObj();
		for(var i=0; i<obj.length; i++){
			if(obj[i].id === objValue){
				for(var prop in obj[i]){
					this[prop] = obj[i][prop];
				}
				break;
			}
		}
	}
	
	this.ShowValues = function(){
		for(var prop in this){
			if(typeof this[prop] != "function")
					console.log(prop + " = " + this[prop]);
				}
	}
	
	this.GetObject = function(){
		var obj={};
		for(var prop in this){
			if(typeof this[prop] != "function")
					obj[prop] = this[prop];
				}
		return obj;
	}
}

var ModelData = new ModelDataClass();
ModelData.GetValue("asd54ffg");
ModelData.ShowValues();
console.log(ModelData.GetObject());