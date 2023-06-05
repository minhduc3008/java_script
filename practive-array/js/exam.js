// Tạo mảng sinh viên
const students = [];

function createStudent(name, email, phone, address) {
  const gender = Math.random() < 0.5 ? 1 : 2;
  return {
    name: name,
    email: email,
    phone: phone,
    address: address,
    gender: gender,
  };
}

// Tạo 5000 sinh viên ngẫu nhiên
for (let i = 1; i <= 500; i++) {
  const student = createStudent(
    `Tên Sinh Viên ${i}`,
    `suntech${i}@example.com`,
    `Số điện thoại 03xxx${i}`,
    `Địa chỉ thôn ${i}`
  );
  students.push(student);
}

// Hiển thị danh sách sinh viên vào table
function displayStudents(pageNumber) {
  const tableBody = document.querySelector("#studentTable tbody");
  tableBody.innerHTML = "";

  const itemsPerPage = 50;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  for (let i = startIndex; i < endIndex; i++) {
    if (students[i]) {
      const student = students[i];
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.address}</td>
            <td>${student.gender === 1 ? "Nữ" : "Nam"}</td>
            <td>
                <button onclick="editStudent(${i})" style="color: brown;">Sửa</button>
                <button onclick="deleteStudent(${i})" style="color: red;">Xóa</button>
            </td>
          `;
      tableBody.appendChild(row);
    }
  }
}

// Hàm thêm sinh viên
function addStudent(name, email, phone, address, gender) {
  const student = {
    name: name,
    email: email,
    phone: phone,
    address: address,
    gender: gender
  };
  students.push(student);
}

// Hàm sửa sinh viên
function editStudent(studentIndex, name, email, phone, address, gender) {
  if (students[studentIndex]) {
    students[studentIndex].name = name;
    students[studentIndex].email = email;
    students[studentIndex].phone = phone;
    students[studentIndex].address = address;
    students[studentIndex].gender = gender;
  }
}

// Hàm xóa sinh viên
function deleteStudent(studentIndex) {
    if (confirm('bạn có muốn xóa ko?') ) {
    students[studentIndex]
    students.splice(studentIndex, 1);
    displayStudents(currentPage);


  }
}

// Phân trang
const itemsPerPage = 50; // Số sinh viên hiển thị trên mỗi trang
let currentPage = 1;

function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    displayStudents(currentPage);
  }
}

function nextPage() {
  const totalPages = Math.ceil(students.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    displayStudents(currentPage);
  }
}

// Hiển thị trang đầu tiên
displayStudents(currentPage);