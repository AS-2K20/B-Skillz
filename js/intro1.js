var btn_yes = document.getElementById('q1_yes');
var btn_no = document.getElementById('q1_no');

console.log(btn_yes);

btn_yes.addEventListener("click",function(){
    document.getElementById("mse_click").play();  
    setTimeout(f1,500);
        function f1() {
            window.location.assign("intro2.html");         
        }
});

btn_no.addEventListener("click",function(){
    document.getElementById("mse_click").play();  
    setTimeout(f2,500);
    function f2() {
        window.location.assign("intro1_no.html");
    }

});