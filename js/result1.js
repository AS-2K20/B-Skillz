
    var speedSkill = window.localStorage.getItem('speedskill_bs1');
    var focusSkill = window.localStorage.getItem('focusskill_bs1');
    var totalAnsweredQuestions = window.localStorage.getItem('totalansweredquestions_bs1');
    var totalcorrectanswer = window.localStorage.getItem('totalcorrectanswer_bs1');
    var category = window.localStorage.getItem('category');

    console.log("Speed Skill : ",speedSkill);
    console.log("Focus Skill : ",focusSkill,"%");
    console.log("Total Answered Questions : ",totalAnsweredQuestions);
    console.log("Total Correct Answer : ",totalcorrectanswer);
    console.log("Your Category : ",category);

    var heading1 = document.getElementById("div_heading");
    var image = document.getElementById("div_image");
    var p = document.getElementById("para");
    var btn1 = document.getElementById("go_back");

    window.onload = function(){
        document.getElementById("win_sound").play();
        setTimeout(display_results,5000);
        document.getElementById("go_back").style.visibility="hidden";
    }

    function display_results(){
        document.getElementById("go_back").style.visibility="visible";
        if(category=="seed"){
            heading1.innerHTML ="<div>"+"YOU HAVE COMPLETED THE BS1+ LEVEL!"+"</div>";
            image.innerHTML = "<img src=../assets/seed_meme1.webp>";
            p.innerHTML += "<div>"+"Total Answered Questions: "+totalAnsweredQuestions+"</div>";
            p.innerHTML += "<div>"+"Total Correct Answer: "+totalcorrectanswer+"</div>";
            p.innerHTML += "<div>"+"Total Time: 50 Seconds "+"</div>";
            p.innerHTML += "<div>"+"Your Category: Seed"+"</div>";
            p.innerHTML += "<div>"+"Speed Skill: "+speedSkill+"</div>";
            p.innerHTML += "<div>"+"Focus Skill: "+focusSkill+"%"+"</div>";
        }
        if(category=="plant"){
            heading1.innerHTML ="<div>"+"YOU HAVE COMPLETED THE BS1+ LEVEL!"+"</div>";
            image.innerHTML = "<img src=../assets/plant_meme1.gif>";
            p.innerHTML += "<div>"+"Total Answered Questions: "+totalAnsweredQuestions+"</div>";
            p.innerHTML += "<div>"+"Total Correct Answer: "+totalcorrectanswer+"</div>";
            p.innerHTML += "<div>"+"Total Time: 50 Seconds "+"</div>";
            p.innerHTML += "<div>"+"Your Category: Plant"+"</div>";
            p.innerHTML += "<div>"+"Speed Skill: "+speedSkill+"</div>";
            p.innerHTML += "<div>"+"Focus Skill: "+focusSkill+"%"+"</div>";
        }
        if(category=="tree"){
            heading1.innerHTML ="<div>"+"YOU HAVE COMPLETED THE BS1+ LEVEL!"+"</div>";
            image.innerHTML = "<img src=../assets/tree_meme1.webp>";
            p.innerHTML += "<div>"+"Total Answered Questions: "+totalAnsweredQuestions+"</div>";
            p.innerHTML += "<div>"+"Total Correct Answer: "+totalcorrectanswer+"</div>";
            p.innerHTML += "<div>"+"Total Time: 50 Seconds "+"</div>";
            p.innerHTML += "<div>"+"Your Category: Tree"+"</div>";
            p.innerHTML += "<div>"+"Speed Skill: "+speedSkill+"</div>";
            p.innerHTML += "<div>"+"Focus Skill: "+focusSkill+"%"+"</div>";
        }
        if(category=="zero"){
            heading1.innerHTML ="<div>"+"YOU HAVE COMPLETED THE BS1+ LEVEL!"+"</div>";
            image.innerHTML = "<img src=../assets/zero_meme1.gif>";
            p.innerHTML += "<div>"+"Total Answered Questions: "+totalAnsweredQuestions+"</div>";
            p.innerHTML += "<div>"+"Total Correct Answer: "+totalcorrectanswer+"</div>";
            p.innerHTML += "<div>"+"Total Time: 50 Seconds "+"</div>";
            p.innerHTML += "<div>"+"Your Category: zero"+"</div>";
            p.innerHTML += "<div>"+"Speed Skill: "+speedSkill+"</div>";
            p.innerHTML += "<div>"+"Focus Skill: "+focusSkill+"%"+"</div>";
        }
        if(category=="hybrid"){
            heading1.innerHTML ="<div>"+"YOU HAVE COMPLETED THE BS1+ LEVEL!"+"</div>";
            image.innerHTML = "<img src=../assets/yes1_meme.webp>";
            p.innerHTML += "<div>"+"Total Answered Questions: "+totalAnsweredQuestions+"</div>";
            p.innerHTML += "<div>"+"Total Correct Answer: "+totalcorrectanswer+"</div>";
            p.innerHTML += "<div>"+"Total Time: 50 Seconds "+"</div>";
            p.innerHTML += "<div>"+"Your Category: Hybrid"+"</div>";
            p.innerHTML += "<div>"+"Speed Skill: "+speedSkill+"</div>";
            p.innerHTML += "<div>"+"Focus Skill: "+focusSkill+"%"+"</div>";
        }
    }

    btn1.addEventListener("click",function(){
        document.getElementById("mse_click").play();
        setTimeout(f2,500);
        function f2() {
        window.location.replace("games_rules.html")
        }        
    });
       
    



