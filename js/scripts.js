$(function(){

var numberToNumeralOnes = function(input){
  //Variables
  var ones ="";
  var tens ="";
  var hundreds ="";
  var thousands ="";

  //Ones spot
  var ones = input.charAt(input.length -1);
  ones = ones.replace("1","I");
  ones = ones.replace("2","II");
  ones = ones.replace("3","III");
  ones = ones.replace("4","IV");
  ones = ones.replace("5","V");
  ones = ones.replace("6","VI");
  ones = ones.replace("7","VII");
  ones = ones.replace("8","VIII");
  ones = ones.replace("9","IX");
  ones = ones.replace("0","");

  //For Tens
  if (input.length > 1) {
    var tens = input.charAt(input.length -2);
    tens = tens.replace("1","I");
    tens = tens.replace("2","II");
    tens = tens.replace("3","III");
    tens = tens.replace("4","IV");
    tens = tens.replace("5","V");
    tens = tens.replace("6","VI");
    tens = tens.replace("7","VII");
    tens = tens.replace("8","VIII");
    tens = tens.replace("9","IX");
    tens = tens.replace("0","");
  }

  //For hundreds
  if (input.length > 2) {
    var tens = input.charAt(input.length -3);
    tens = tens.replace("1","I");
    tens = tens.replace("2","II");
    tens = tens.replace("3","III");
    tens = tens.replace("4","IV");
    tens = tens.replace("5","V");
    tens = tens.replace("6","VI");
    tens = tens.replace("7","VII");
    tens = tens.replace("8","VIII");
    tens = tens.replace("9","IX");
    tens = tens.replace("0","");
  }


  return thousands + hundreds + tens + ones;
}


var changeToRomanNumeral = function (input){
  input = numberToNumeralOnes(input);
  return input;
}


// Front End Logic
  $(".roman").submit(function(event){
    $("#romanNumber").empty();
    var inputNumber = $(".inputNumber").val();
    inputNumber = changeToRomanNumeral(inputNumber);
    $("#romanNumber").append(inputNumber);
    event.preventDefault();
  });
});
