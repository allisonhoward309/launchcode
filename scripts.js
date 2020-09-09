window.addEventListener("load", function() {
    console.log('window loaded');
    let newImage = new Collection([ "photos/sign.jpg", "photos/shelf.jpg", "photos/tray.jpg"], "craftsImg");
    let nextButton = document.getElementById("next");
    let backButton = document.getElementById("back");
    
    nextButton.onclick = function () {
        newImage.next();
    }
    backButton.onclick = function () {
        newImage.back();
    }

function Collection(urls, imgID) {
    let imgElement = document.getElementById(imgID);
    let index = 0;
    this.selectImg = function() {
        imgElement.src = urls[index];
    };
    this.next = function(){
        if(++index >= urls.length) {
            index = 0;
        }
        this.selectImg();
    };
    this.back = function(){
        if(--index < 0) {
            index = urls.length- 1;
        }
        this.selectImg();
    };
    this.selectImg();
};
nextButton.addEventListener("mouseover", function(){
 nextButton.style.backgroundColor = "rgb(87, 129, 239)";
});
backButton.addEventListener("mouseover", function(){
    backButton.style.backgroundColor = "rgb(87, 129, 239)";
   });
});
