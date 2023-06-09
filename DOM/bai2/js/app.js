function changeImage(id) {
    let imagePath = document.querySelector(`#${id}`).getAttribute('src');

    document.querySelector('#img-main').setAttribute('src', imagePath);
}