var btn_yes = document.getElementById('q1_yes');
var btn_no = document.getElementById('q1_no');

console.log(btn_yes);

btn_yes.addEventListener("click",function(){
    console.log("button clicked");
    window.location.replace("intro2.html");
});

btn_no.addEventListener("click",function(){
    window.location.replace("intro1_no.html");
});