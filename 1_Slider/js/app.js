document.addEventListener("DOMContentLoaded", function(){
    var nextButton = document.querySelector("#nextPicture");
    var prevButton = document.querySelector("#prevPicture");
    var list = document.querySelectorAll("ul li");
    function getList(elements) {
        var arrList = [];
        for(var i=0; i<elements.length; i++) {
            arrList.push(elements[i]);
        }
        return arrList
    }
    var imageList = getList(list);
    var counter = 0;
    imageList[counter].classList.add("visible");

    nextButton.addEventListener("click", function() {
        console.log("Button next has been clicked");
        imageList[counter].classList.remove("visible");
        counter++;
        if (counter >= imageList.length) {
            counter = 0;
        } imageList[counter].classList.add("visible");

    });

    prevButton.addEventListener("click", function() {
       console.log("Button prev has been clicked");
       imageList[counter].classList.remove("visible");
       counter--;
       if (counter < 0) {
           counter = imageList.length - 1
       } imageList[counter].classList.add("visible");

    });


});

// Punkt 7. Slider po wyjechaniu poza tablice z liczbami naszych obrazków, przestaje je wyświetlać //