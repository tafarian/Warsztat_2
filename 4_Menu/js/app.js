document.addEventListener("DOMContentLoaded", function () {
    console.log("Działa !");
    var list = document.querySelector("div ul");
    var listEl = list.children;

    for (var i = 0; i < listEl.length; i++) {
        listEl[i].addEventListener("mouseover", function () {
            if (this.querySelector("ul") != null) {
                this.querySelector("ul").style.display = "inline-block";
            }
        });
        listEl[i].addEventListener("mouseout", function () {
            if (this.querySelector("ul") != null) {
                this.querySelector("ul").style.display = "none";
            }
        });
    }
});