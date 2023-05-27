Function
// Function có tham số nhập vào
function vonglapUP(soBatdau, soKetThuc) {   //Khởi tạo funcion
    for (soBatdau; soBatdau <= soKetThuc; soBatdau++) {
        console.log(soBatdau);
    }
}

function vonglapDOWN(soBatdau, soKetThuc) {   //Khởi tạo funcion
    for (soBatdau; soBatdau >= soKetThuc; soBatdau--) {
        console.log(soBatdau);
    }
}

// Function không có tham số nhập vào
function helloWorld() {
  document.write('Hello World' + '<br> <hr>')
}

// Gọi ra funtion đã tạo sẵn
vonglapUP(20, 30); 
vonglapDOWN(29, 10);
helloWorld();