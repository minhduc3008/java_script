// Function

// function vonglapUP(soBatdau, soKetThuc) {   //Khởi tạo funcion
//     for (soBatdau; soBatdau <= soKetThuc; soBatdau++) {
//         console.log(soBatdau);
//     }
// }

// function vonglapDOWN(soBatdau, soKetThuc) {   //Khởi tạo funcion
//     for (soBatdau; soBatdau >= soKetThuc; soBatdau--) {
//         console.log(soBatdau);
//     }
// }

// vonglapUP(20, 30) // Gọi ra funtion đã tạo sẵn
// vonglapDOWN(29, 10)

for (let i = 50; i >= 1; i--) {
  if (i % 2 == 0) {
    document.write(`<span class='red'>${i}</span> `);
  } else {
    document.write(`<span class='blue'>${i}</span> `);
  }
}
