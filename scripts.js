window.addEventListener("load", function() {
    console.log('window loaded');
    let newImage = [ "photos/shelf.jpg", "photos/tray.jpg"];
    let next = document.getElementById("next");
    let image = document.getElementById("craftsImg");

    next.addEventListener("click", function(event){
        if (image.src === "photos/sign.jpg") {
            image.src = "photos/shelf.jpg";
        } elseif (image.src === "photos/shelf.jpg") {
            image.src = "photos/tray.jpg";
        }   else {
            image.src = "photos/sign.jpg";  
        }
    });

});
