window.addEventListener("load", function() {
    console.log('window loaded');
    let newImage = new Collection([ "photos/sign.jpg", "photos/shelf.jpg", "photos/tray.jpg"], "craftsImg");
    
    
    document.getElementById("next").onclick = function () {
        newImage.next();
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
    this.selectImg();
};
    
// document.getElementById("back").onclick = function () {
//     newImage.back();
// }
// function Collection(urls, imgID) {
// let imgElement = document.getElementById(imgID);
// let index = 0;
// this.selectImg = function() {
//     imgElement.src = urls[index];
// };
// // this.back = function(){
// //     if(--index >= 0) {
// //         index = urls.length-1;
// //     }
// //     this.selectImg();
// // };
// this.selectImg();
// };




});
