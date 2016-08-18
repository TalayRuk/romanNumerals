$(function(){

var numberToNumeral = function(input){
  var lastNumber = input.charAt(input.length -1);
  lastNumber = lastNumber.replace("1","I");
  lastNumber = lastNumber.replace("2","II");
  lastNumber = lastNumber.replace("3","III");
  lastNumber = lastNumber.replace("4","IV");
  lastNumber = lastNumber.replace("5","V");
  lastNumber = lastNumber.replace("6","VI");
  lastNumber = lastNumber.replace("7","VII");
  lastNumber = lastNumber.replace("8","VIII");
  lastNumber = lastNumber.replace("9","IX");
  lastNumber = lastNumber.replace("0","");
  var restOfNumber = input.substring(0,(input.length-1));
  var finalNumber = restOfNumber + lastNumber;
  return finalNumber;
}



var changeToRomanNumeral = function (input){
  input = numberToNumeral(input);
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

var letter = ['I', '']
