document.addEventListener("DOMContentLoaded", function () {
    console.log("Działa !");
    var tooltip = document.querySelectorAll(".tooltip");
    console.log(tooltip);

    for (var i = 0; i < tooltip.length; i++) {
        tooltip[i].addEventListener("mouseover", function () {
            var popup = document.createElement("span");
            popup.className = "tooltipText";
            var popupText = document.createTextNode(this.dataset.text);
            popup.appendChild(popupText);
            this.appendChild(popup);
        });
        tooltip[i].addEventListener("mouseout", function () {
            var toDelete = document.querySelector(".tooltipText");
            toDelete.parentElement.removeChild(toDelete);
        });
    }

});