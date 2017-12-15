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
    var selectedImage = imageList[0];
    console.log(selectedImage);


});