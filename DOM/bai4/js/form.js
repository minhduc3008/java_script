function showMessage() {
    let name = document.querySelector('#name').value;
    let city = document.querySelector('#city').value;
    document.querySelector('#result').innerHTML = `Hello:  ${name}`;
    document.querySelector('#city-result').innerHTML = `Đến từ:  ${city}`;
}