var num = 2669;
var romanArray = [];
var ds = "";
var cs = "";
function returnRoman (romanCharacter,count){
  var romanString = "";
  for (var i=1; i<=count; i++){
    romanString = romanString + romanCharacter

  }
  return romanString;
}
function romansConvertor(num){
  var romanString = "";
  if (num <3,999){
  var countOfThousand =  Math.floor(num / 1000);
  romanString = romanString + returnRoman("M",countOfThousand)
  var num = num % 1000;
  var countOf500 = Math.floor(num/500)
  romanString = romanString + returnRoman("D",countOf500)
  num = num % 500
  var countOf100 = Math.floor(num/100)
  num = num % 100
  romanString = romanString + returnRoman("C",countOf100)
  var countof50 = Math.floor(num/50)
  num = num % 50
  romanString = romanString + returnRoman("L",countof50)
  var countof10 = Math.floor(num/10)
  num = num % 10
  romanString = romanString + returnRoman("X",countof10)

  var countof9 = Math.floor(num/9)
  num = num % 9
  romanString = romanString + returnRoman("IX",countof9)
  console.log(countof9)
  var countof5 = Math.floor(num/5)
  num = num % 5
  romanString = romanString + returnRoman("V",countof5)
  var countof4 = Math.floor(num/4)
  num = num % 4
  romanString = romanString + returnRoman("IV",countof4)
  console.log(romanString)
  console.log(num);

  }
  return romanString;
}
  romansConvertor(num);
  // returnRoman("P",10);
