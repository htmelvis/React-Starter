export default function validNumbers(input){
  var numbersOnly =  /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/;
  return numbersOnly.test(input);
}