var bar = document.querySelector(".fa-bars");
var unList = document.querySelector(".unlist");
var links = document.querySelectorAll(".unlist li");

bar.addEventListener("click",popUp);


function popUp(){
    unList.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    
}

