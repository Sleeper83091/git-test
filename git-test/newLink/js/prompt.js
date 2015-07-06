var num = parseInt(prompt("Give a number to add"));
var num2 = parseInt(prompt("Give the second number you wish to add"));
invalidNum = isNaN(num && num2);

if (invalidNum){
  alert("One of your numbers is invalid!");
  num = parseInt(prompt("Give a number to add"));;
  num2 = parseInt(prompt("Give the second number you wish to add"));
  console.log(num + num2);
}
else{
	console.log(num + num2);
}
