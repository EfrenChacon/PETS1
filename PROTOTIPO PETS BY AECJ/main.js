
let btnitems = document.querySelectorAll(".item .btn-item")

for(let i=0; i<btnitems.length; i++){
btnitems[i].addEventListener("click", function(e){

    let btn = e.target;
    
    if(btn.className=="btn-item active"){
        removerClass()
    } else { 
        removerClass();
        btn.classList.add("active")
    }
})

}
function removerClass(){
    for(let i=0; i<btnitems.length; i++){
        btnitems[i].classList.remove("active");
    }   
}