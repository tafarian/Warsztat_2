document.addEventListener("DOMContentLoaded", function () {
    console.log("Działa !");
    var list = document.querySelector("div ul");
    console.log(list);
    var firstSubMenu = list.children[1].querySelectorAll("li");
    console.log(firstSubMenu);
    var secondSubMenu = list.children[3].querySelectorAll("li");
    console.log(secondSubMenu);
    var openFirstMenu = list.children[1].querySelector("ul");
    var openSecondMenu = list.children[3].querySelector("ul");
    console.log(openFirstMenu, openSecondMenu);

    firstSubMenu.addEventListener("mouseover", function () {
        openFirstMenu.classList.add("nav");
    });
    firstSubMenu.addEventListener("mouseout", function () {
        openFirstMenu.classList.remove("nav");
    });

    secondSubMenu.addEventListener("mouseover", function () {
        openSecondMenu.classList.add("nav");
    });
    secondSubMenu.addEventListener("mouseout", function () {
        openSecondMenu.classList.remove("nav");
    });
});