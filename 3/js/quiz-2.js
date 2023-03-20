const number = parseInt(prompt("1보다 큰 수를 입력해주세요."));
var sum = 0;

if(number > 1){
  for(var i = 1; i <= number; i++){
    if(i % 2 != 1){
      sum += i;
      document.write(`${i} ------ ${sum}<br>`);
    }
  }
} else{
  document.write("1보다 큰 수!!!")
}