$(function(){

  var changeToRomanNumeral = function(input){
    //Variables
    var ones ="";
    var tens ="";
    var hundreds ="";
    var thousands ="";
    //Ones spot
    ones = input.charAt(input.length -1);
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
      tens = input.charAt(input.length -2);
      tens = tens.replace("1","X");
      tens = tens.replace("2","XX");
      tens = tens.replace("3","XXXI");
      tens = tens.replace("4","XL");
      tens = tens.replace("5","L");
      tens = tens.replace("6","LX");
      tens = tens.replace("7","LXX");
      tens = tens.replace("8","LXXX");
      tens = tens.replace("9","XC");
      tens = tens.replace("0","");
    }
    //For hundreds
    if (input.length > 2) {
      hundreds = input.charAt(input.length -3);
      hundreds = hundreds.replace("1","C");
      hundreds = hundreds.replace("2","CC");
      hundreds = hundreds.replace("3","CCC");
      hundreds = hundreds.replace("4","CD");
      hundreds = hundreds.replace("5","D");
      hundreds = hundreds.replace("6","DC");
      hundreds = hundreds.replace("7","DCC");
      hundreds = hundreds.replace("8","DCCC");
      hundreds = hundreds.replace("9","CM");
      hundreds = hundreds.replace("0","");
    }
  //For hundreds
    if (input.length > 3) {
     thousands = input.charAt(input.length -4);
     thousands = thousands.replace("1","M");
     thousands = thousands.replace("2","MM");
     thousands = thousands.replace("3","MMM");
      }
    return thousands + hundreds + tens + ones;
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
