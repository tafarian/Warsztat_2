document.addEventListener("DOMContentLoaded", function() {

    var body = document.querySelector("body");
    var list = document.querySelector("ul");
    var listElements = list.querySelectorAll("li");
    var newDiv = document.createElement("div");
    var img = document.createElement("img");

    for(var i=0; i<listElements.length; i++) {
        listElements[i].addEventListener("click", function() {
            console.log(this.innerHTML);
            body.appendChild(newDiv);
            newDiv.classList.add("fullScreen");
            newDiv.appendChild(img);
            img.setAttribute("src", this.firstElementChild.getAttribute("src"));
            var button = document.createElement("button");
            newDiv.appendChild(button);
            button.innerText = "ZAMKNIJ";
            button.classList.add("close");
            button.addEventListener("click", function (event) {
               newDiv.parentElement.removeChild(newDiv);
               button.parentElement.removeChild(button);
            });
        });
    }


});
/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
