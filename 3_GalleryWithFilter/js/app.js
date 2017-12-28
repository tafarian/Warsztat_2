document.addEventListener("DOMContentLoaded", function() {
    console.log("Działa !");
    var images = document.querySelectorAll("img");
    var hideButton = document.querySelector("#hideButton");
    var showButton = document.querySelector("#showButton");
    var input = document.querySelector("#tagInput");
    console.log(images, hideButton, showButton, input);

    hideButton.addEventListener("click", function() {
       console.log("UKRYJ");
       console.log(input.value);
       input.value="";
       for(var i=0; i<images.length; i++) {
           images[i].classList.remove("invisible");
           console.log(images[i].dataset);
           if (images[i].dataset.tag.indexOf(input.value) >= 0) {
               images[i].classList.add("invisible");
           }
       }
    });

    showButton.addEventListener("click", function() {
       console.log("POKAŻ");
       console.log(input.value);
       input.value="";
       for(var i=0; i<images.length; i++) {
           images[i].classList.add("invisible");
           console.log((images[i].dataset));
           if (images[i].dataset.tag.indexOf(input.value) >= 0) {
               images[i].classList.remove("invisible");
           }
       }
    });
});

// Coś nie działa :|