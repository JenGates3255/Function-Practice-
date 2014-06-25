// var triplefive = function(){
// 	for (var i = 0; i < 3; i++ ){
// 		console.log("five!");
// 	}
// }
// triplefive()

// var lastletter = function(string){
// 	return string[string.length-1] 
// }
// lastletter("Jen")

// var square = function(number) {
// 	return number*number;
// }
// square (5)

// var negate = function(negative){
// 	return -negative;
// }
// negate(5)
// //*********************************
// var toArray = function(numbers){
// 	return numbers;
// }
// toArray(2)
// *********************************
// var startsWithA = function(word){
// 	return word.charAt(0) === 'a';
// }
// startsWithA("apple")

// var excite = function(fun){
// 	return fun+"!!!";
// }
// excite("go")

// var sun = function(word){
// 	return word 
// }
// sun ("")


// var tiny =function(x){
// 	return x >= 0 && x <= 1 
// }
// tiny (".5")


// pseudo code
var getSeconds = function(time) {
  // get the minutes
  var minutes = time.substring(0,2)

  // calculate seconds
  var totalSeconds = 60 * minutes; 

  // get the seconds
  var seconds = time.substring(3);

  
  // add all together
  console.log(totalSeconds + (seconds)
  // return result
}

getSeconds('10:00');


