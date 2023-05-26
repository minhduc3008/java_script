// // function
// Ví dụ về hàm 
function soLonNhat(num1, num2, num3) {
  let max = num1;
  if (num2 > max) {
    max = num2;
  }
  if (num3 > max) {
    max = num3;
  }
  return max;
}
let numberOne = parseInt(prompt("Nhập vào số thứ nhất: "));
let numberTwo = parseInt(prompt("Nhập vào số thứ hai: "));
let numberThree = parseInt(prompt("Nhập vào số thứ ba: "));
let maxNumber = soLonNhat(numberOne, numberTwo, numberThree);
alert("Số lớn nhất là: " + maxNumber);


