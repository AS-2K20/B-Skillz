var btn1 = document.getElementById("q1_yes");

btn1.addEventListener("click",function(){
    document.getElementById("mse_click").play(); 
    setTimeout(f1,500);
        function f1() {
            window.location.assign("games_rules.html");
        }    
});