var button1 = document.getElementById("lvl1");
var button2 = document.getElementById("lvl2");
var button3 = document.getElementById("lvl3");

button1.addEventListener("click",function(){
    document.getElementById("lvl1_sound").play();  
    setTimeout(f1,3000);
        function f1() {
            window.location.replace("trial1.html");       
        }
});

button2.addEventListener("click",function(){
    document.getElementById("lvl2_sound").play();  
    setTimeout(f2,3000);
        function f2() {
            window.location.replace("trial2.html");       
        }
});

button3.addEventListener("click",function(){
    document.getElementById("lvl3_sound").play();  
    setTimeout(f3,3000);
        function f3() {
            window.location.replace("trial3.html");       
        }
});