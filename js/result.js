window.onload = function(){
    var speedSkill = window.localStorage.getItem('speedskill_bs1');
    var focusSkill = window.localStorage.getItem('focusskill_bs1');
    var totalAnsweredQuestions = window.localStorage.getItem('totalansweredquestions_bs1');
    var totalcorrectanswer = window.localStorage.getItem('totalcorrectanswer_bs1');
    
    console.log("Speed Skill : ",speedSkill);
    console.log("Focus Skill : ",focusSkill,"%");
    console.log("Total Answered Questions : ",totalAnsweredQuestions);
    console.log("Total Correct Answer : ",totalcorrectanswer);
}

