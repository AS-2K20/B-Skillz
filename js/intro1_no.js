var btn1 = document.getElementById('q1_yes');

window.onload=function(){    
    document.getElementById("thenameissh").play();    
}    
console.log(btn1);
btn1.addEventListener("click",function(){
    document.getElementById("mse_click").play();  
    setTimeout(f1,500);
        function f1() {
            window.location.assign("intro2.html");         
        }
});
