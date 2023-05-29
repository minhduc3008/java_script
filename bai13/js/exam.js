// Function Object:
// dùng "this" để khai báo thuộc tính của function
    function Student() {
        this.name = "Vũ Minh Đức"; // khai báo thuộc tính name = Vũ Minh Đức
        this.age = 23;
        this.email = 'vuminhduc3008@gmail.com'
        this.getName = function() { // khai báo function "getName" trả về kết quả "name"
            return this.name
        }
        this.getAge = function() {
            return this.age
        }
        return // trả về toàn bộ function
    }

    let studentOne = new Student;

    console.log(`tên học sinh là: ${studentOne.name}`);
    console.log('tuổi của học sinh là: ' + studentOne.age)