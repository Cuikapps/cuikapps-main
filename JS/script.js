"use strict";
var drop = false;
var burger = document.querySelector(".burger");
var nav = document.querySelector(".links");
var navLinks = document.querySelectorAll(".nav-links");
var burgerTop = document.querySelector("#b-top");
var burgerMiddle = document.querySelector("#b-middle");
var burgerBottom = document.querySelector("#b-bottom");
var navSlide = function () {
    burger.addEventListener("click", function () {
        if (drop === true) {
            nav.style.animation = "dropdown-rev 0.5s ease forwards";
            navLinks.forEach(function (link) {
                link.style.animation = "word-fade-rev 1s ease forwards";
            });
            drop = false;
        }
        else if (drop === false) {
            nav.style.animation = "dropdown 0.5s ease forwards";
            navLinks.forEach(function (link) {
                link.style.animation = "word-fade 1s ease forwards";
            });
            drop = true;
        }
    });
};
function getWidth() {
    return Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth);
}
function getHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight);
}
function app() {
    navSlide();
}
app();
