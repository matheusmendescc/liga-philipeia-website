const btn = document.getElementById("back-top");

btn.addEventListener("click", function(){
    window.scrollTo(0, 0);
})

document.addEventListener("scroll", ocultar);

function ocultar(){
    if(window.scrollY > 200){
        btn.style.display = "flex";
    } else {
        btn.style.display = "none";
    }
}

ocultar();