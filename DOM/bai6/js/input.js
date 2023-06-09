let addContent = document.querySelector("#btn-plus");
let inputContent = document.querySelector("#input-list");
let saveButton = document.querySelector("#btn-save");
saveButton.addEventListener("click", saveInputs);

addContent.addEventListener("click", function () {
  if (inputContent.childElementCount <= 10) {
    inputContent.insertAdjacentHTML(
      "beforeend",
      `<div class="input-item">
          <input type="text" placeholder="Nhập thông tin vào đây..." />
          <button onclick="deleteInput(this)">-</button>
      </div>`
    );
  }

  if (inputContent.childElementCount === 11) {
    addContent.style.display = "none";
  }
});

function deleteInput(button) {
  if (confirm("Bạn có muốn xóa không?")) {
    const inputDiv = button.parentElement;
    inputDiv.remove();

    if (inputContent.childElementCount <= 10) {
      addContent.style.display = "block";
    }
  }
}

function saveInputs() {
  const inputs = document.querySelectorAll(".input-item input");
  const values = [];
  
  inputs.forEach((input) => {
    const value = {
      content: input.value.trim(),
      deleted: false
    }
    if (value === "") {
      alert("Hãy nhập thông tin vào input");
      return;
    }
    values.push(value);
  });

  localStorage.setItem("values", JSON.stringify(values));
}

window.addEventListener("load", function () {
  const savedValues = localStorage.getItem("values");
  if (savedValues) {
    const values = JSON.parse(savedValues);
    values.forEach((values) => {
      inputContent.insertAdjacentHTML(
        "beforeend",
        `<div class="input-item">
          <input type="text" value="${values.content}" />
          <button onclick="deleteInput(this)">-</button>
        </div>`
      );
    });

    if (values.length === 11) {
      addContent.style.display = "none";
    }
  }
});
