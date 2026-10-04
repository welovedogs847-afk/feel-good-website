const siteFrame = document.querySelector(".site-frame");

const startButton = document.getElementById("startButton");
const gardenButton = document.getElementById("gardenButton");
const nextFlowerButton = document.getElementById("nextFlowerButton");
const flowerOne = document.getElementById("flowerOne");
const flowerTwo = document.getElementById("flowerTwo");
const flowerThree = document.getElementById("flowerThree");
const finalButton = document.getElementById("finalButton");
/* PINK FLOWER MESSAGE */

flowerOne.addEventListener("click", function () {

    flowerOne.classList.toggle("show-message");

});
/* YELLOW FLOWER MESSAGE */

flowerTwo.addEventListener("click", function () {

    flowerTwo.classList.toggle("show-message");

});
/* LAVENDER FLOWER MESSAGE */

flowerThree.addEventListener("click", function () {

    flowerThree.classList.toggle("show-message");

});


/* SCREEN 1 → SCREEN 2 */

startButton.addEventListener("click", function () {

    siteFrame.classList.add("show-second");

});


/* SCREEN 2 → FLOWER GARDEN */

gardenButton.addEventListener("click", function () {

    siteFrame.classList.remove("show-second");

    siteFrame.classList.add("show-flower");

});


/* FLOWER GARDEN → SCREEN 4 */

nextFlowerButton.addEventListener("click", function () {

    siteFrame.classList.remove("show-flower");

    siteFrame.classList.add("show-four");

});

/* SCREEN 4 → FINAL SCREEN */

finalButton.addEventListener("click", function () {

    siteFrame.classList.remove("show-four");

    siteFrame.classList.add("show-final");

});