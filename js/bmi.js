function bmi(){

var height = document.getElementById("height").value;

var weight = document.getElementById("weight").value;

var bmi = (weight / (height*height)) * 10000;

alert("Your BMI is : " + bmi);
}