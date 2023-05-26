/* Khai báo Object

    let tenObject = {
        key: value,
        key: value,
        key: value,
            ...
    } 
*/

let student = {
  name: "Vũ Minh Đức",
  age: 23,
  university: {
    name: "HUMG",
    address: "Hà Nội",
  },
};

document.write("Tên: " + student.name);
document.write("<br>");
document.write("Tuổi: " + student.age);
document.write("<br>");
document.write("Trường đại học: " + student.university.name);

// Bài tập 1
let user = {}; // tạo ra object rỗng
user.name = "John"; // thêm name = John
user.surname = "Parker"; // thêm surname = Smith
user.name = "Peter"; // thay đổi name = Pete
user.fullname = function () {
  return this.name + " " + this.surname;
};
console.log(user.name);
console.log(user.fullname());
// Bài tập 2

const calculator = {
  read: function (so1, so2) {
    this.so1 = so1;
    this.so2 = so2;
  },
  sum: function () {
    return this.so1 + this.so2;
  },
  avg: function () {
    return (this.so1 + this.so2) / 2;
  },
};

calculator.read(1, 3);
console.log(calculator.sum());
console.log(calculator.avg());
