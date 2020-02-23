module.exports = function toReadable (number) {
  let arr = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 
            'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arr2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let num = number;
  let str = '';
  if(num == 0) {
      str = arr[0];
  }
  if(Math.trunc(number/100) != 0) {
      str += arr[Math.trunc(number/100)] + ' hundred ';
      num -= Math.trunc(number/100)*100; 
  }
  if(Math.trunc(num/10) != 0) {
    if( Math.trunc(num) > 19) {
    str += arr2[Math.trunc(num/10) - 2] + ' ';
    num -= Math.trunc(num/10)*10;
    } else {
        str += arr[Math.trunc(num)] + ' ';
        num -= Math.trunc(num);
    }
 }
if(num < 10 && num > 0) {
    str += arr[num];
    
}
 

  return str.trim();
}
