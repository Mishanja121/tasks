// Создайте функцию find(arr, value), которая ищет в массиве arrзначение value и возвращает его номер, если найдено, или -1, если не найдено. 
function find(arr, value) {	var flag = -1;
	for(var i=0; i<arr.length; i++){
		
		if(arr[i]===value){
			flag = i;	
			break;			
		}
	}
	console.log(flag);
	return flag;
}
find(["1","2","5",4], "e");
/*Создайте фунцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, 
который содержит только числа из arr из диапазона от a до b. 
То есть, проверка имеет видa ≤ arr[i] ≤ b. Функция не должна менять arr.
*/
function filterRange(arr, a, b) {
	var newArr = [];
	var flag = false;
	for(var i=0; i<arr.length; i++){		
		if(!flag){			
			if(arr[i]===a){
				flag=true;
				newArr.push(arr[i]);
			}
		}else{
			newArr.push(arr[i]);
			if(arr[i]===b){
				break;
			}
		}		
	}
	console.log(newArr);
	return newArr;
}
filterRange(["1","2","0","5",4], "2", "5");
/*
Создайте объект с тремя методами:
readValues получает два значения и сохраняет их как свойства объекта
sum возвращает сумму двух значений
mul возвращает произведение двух значений
*/

function TestObject(){
	this.a;
	this.b;
	this.readValues = function(a, b){
		this.a = a;
		this.b = b;
	}
	this.sum = function(){
		return this.a+this.b;
	}
	this.mul = function(){
		return this.a*this.b;
	}
}

var testObj = new TestObject();
testObj.readValues(5,6);
console.log(testObj);
console.log(testObj.sum());
console.log(testObj);
console.log(testObj.mul());