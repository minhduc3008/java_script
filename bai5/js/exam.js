//chuyển đổi kiểu dữ liệu cho biến

let x ='10';
let y ='1';

// chuyển từ string ---> number
// Number(tên-biến)
console.log(Number(x) + Number(y));

// chuyển từ number ---> boolean
// Boolean(tên-biến)
let isAdmin = 0;

console.log(Boolean(isAdmin))

// object to string or string to object

let students = [
    {name: 'nguyen van a'},
    {name: 'nguyen van b'},
    {name: 'nguyen van c'},
]

let studentString = JSON.stringify(students)
let studentObject = JSON.parse(studentString)
console.log(typeof studentString)

let numberTwo = 11.5;
console.log(parseInt(numberTwo))


