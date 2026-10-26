
const smallImages = document.querySelectorAll(".small-images img");
const displayBox = document.querySelector("#displayBox");
const largeImage = document.querySelector("#largeImage");

smallImages.forEach(function (image) {
    image.addEventListener("drag", function () {
        largeImage.src = image.src;
        largeImage.alt = image.alt;
    });

    image.addEventListener("dragend", function () {
        largeImage.src = image.src;
        largeImage.alt = image.alt;
    });
});

displayBox.addEventListener("dragover", function (event) {
    event.preventDefault();
});

displayBox.addEventListener("drop", function (event) {
    event.preventDefault();
});

