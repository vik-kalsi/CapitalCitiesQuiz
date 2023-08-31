totalScore = 0;
document.getElementById("displayScore").innerHTML = 0;

//###########################################################################
//QUESTION 1
//Q1 START

let Q1Budapest = document.getElementById("Q1Budapest");
let Q1Bratislava = document.getElementById("Q1Bratislava");
let Q1Prague = document.getElementById("Q1Prague");
let Q1Belgrade = document.getElementById("Q1Belgrade");

let Q2Section = document.getElementById("Q2Section");



Q1Budapest.addEventListener("click", function() {
    totalScore=totalScore + 1;
    document.getElementById("displayScore").innerHTML = totalScore;
    document.getElementById("Q1FinalAnswer").innerHTML = "Correct Answer!";
    
    Q1Budapest.classList.add("bg-green-500");
    Q1Budapest.classList.remove("hover:bg-orange-500");
    Q1Bratislava.classList.remove("hover:bg-orange-500");
    Q1Prague.classList.remove("hover:bg-orange-500");
    Q1Belgrade.classList.remove("hover:bg-orange-500");

    Q1Budapest.disabled = true;
    Q1Bratislava.disabled = true;
    Q1Prague.disabled = true;
    Q1Belgrade.disabled = true;

    Q2Section.classList.add("block");
    Q2Section.classList.remove("hidden");
});

Q1Bratislava.addEventListener("click", function(){
    document.getElementById("Q1FinalAnswer").innerHTML = "Wrong Answer!";

    Q1Budapest.classList.add("bg-green-500");
    Q1Budapest.classList.remove("hover:bg-orange-500");
    Q1Bratislava.classList.remove("hover:bg-orange-500");
    Q1Prague.classList.remove("hover:bg-orange-500");
    Q1Belgrade.classList.remove("hover:bg-orange-500");

    Q1Bratislava.classList.add("bg-orange-500");

    Q1Budapest.disabled = true;
    Q1Bratislava.disabled = true;
    Q1Prague.disabled = true;
    Q1Belgrade.disabled = true;

    Q2Section.classList.add("block");
    Q2Section.classList.remove("hidden");
});


Q1Prague.addEventListener("click", function(){
    document.getElementById("Q1FinalAnswer").innerHTML = "Wrong Answer!";

    Q1Budapest.classList.add("bg-green-500");
    Q1Budapest.classList.remove("hover:bg-orange-500");
    Q1Bratislava.classList.remove("hover:bg-orange-500");
    Q1Prague.classList.remove("hover:bg-orange-500");
    Q1Belgrade.classList.remove("hover:bg-orange-500");

    Q1Prague.classList.add("bg-orange-500");

    Q1Budapest.disabled = true;
    Q1Bratislava.disabled = true;
    Q1Prague.disabled = true;
    Q1Belgrade.disabled = true;

    Q2Section.classList.add("block");
    Q2Section.classList.remove("hidden");
});


Q1Belgrade.addEventListener("click", function(){
    document.getElementById("Q1FinalAnswer").innerHTML = "Wrong Answer!";

    Q1Budapest.classList.add("bg-green-500");
    Q1Budapest.classList.remove("hover:bg-orange-500");
    Q1Bratislava.classList.remove("hover:bg-orange-500");
    Q1Prague.classList.remove("hover:bg-orange-500");
    Q1Belgrade.classList.remove("hover:bg-orange-500");

    Q1Belgrade.classList.add("bg-orange-500");

    Q1Budapest.disabled = true;
    Q1Bratislava.disabled = true;
    Q1Prague.disabled = true;
    Q1Belgrade.disabled = true;

    Q2Section.classList.add("block");
    Q2Section.classList.remove("hidden");
});


//QUESTION 1
//Q1 END
//###########################################################################



//###########################################################################
//QUESTION 2
//Q2 START

let Q2Berlin = document.getElementById("Q2Berlin");
let Q2Barcelona = document.getElementById("Q2Barcelona");
let Q2Paris = document.getElementById("Q2Paris");
let Q2London = document.getElementById("Q2London");

let Q3Section = document.getElementById("Q3Section");


Q2Paris.addEventListener("click", function() {
    totalScore=totalScore + 1;
    document.getElementById("displayScore").innerHTML = totalScore;
    document.getElementById("Q2FinalAnswer").innerHTML = "Correct Answer!";
    
    Q2Paris.classList.add("bg-green-500");
    Q2Paris.classList.remove("hover:bg-orange-500");
    Q2Berlin.classList.remove("hover:bg-orange-500");
    Q2Barcelona.classList.remove("hover:bg-orange-500");
    Q2London.classList.remove("hover:bg-orange-500");

    Q2Berlin.disabled = true;
    Q2Barcelona.disabled = true;
    Q2Paris.disabled = true;
    Q2London.disabled = true;

    Q3Section.classList.add("block");
    Q3Section.classList.remove("hidden");
});


Q2Berlin.addEventListener("click", function() {
    document.getElementById("Q2FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q2Paris.classList.add("bg-green-500");
    Q2Paris.classList.remove("hover:bg-orange-500");
    Q2Berlin.classList.remove("hover:bg-orange-500");
    Q2Barcelona.classList.remove("hover:bg-orange-500");
    Q2London.classList.remove("hover:bg-orange-500");

    Q2Berlin.classList.add("bg-orange-500");

    Q2Berlin.disabled = true;
    Q2Barcelona.disabled = true;
    Q2Paris.disabled = true;
    Q2London.disabled = true;

    Q3Section.classList.add("block");
    Q3Section.classList.remove("hidden");
});


Q2Barcelona.addEventListener("click", function() {
    document.getElementById("Q2FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q2Paris.classList.add("bg-green-500");
    Q2Paris.classList.remove("hover:bg-orange-500");
    Q2Berlin.classList.remove("hover:bg-orange-500");
    Q2Barcelona.classList.remove("hover:bg-orange-500");
    Q2London.classList.remove("hover:bg-orange-500");

    Q2Barcelona.classList.add("bg-orange-500");

    Q2Berlin.disabled = true;
    Q2Barcelona.disabled = true;
    Q2Paris.disabled = true;
    Q2London.disabled = true;

    Q3Section.classList.add("block");
    Q3Section.classList.remove("hidden");
});


Q2London.addEventListener("click", function() {
    document.getElementById("Q2FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q2Paris.classList.add("bg-green-500");
    Q2Paris.classList.remove("hover:bg-orange-500");
    Q2Berlin.classList.remove("hover:bg-orange-500");
    Q2Barcelona.classList.remove("hover:bg-orange-500");
    Q2London.classList.remove("hover:bg-orange-500");

    Q2London.classList.add("bg-orange-500");

    Q2Berlin.disabled = true;
    Q2Barcelona.disabled = true;
    Q2Paris.disabled = true;
    Q2London.disabled = true;

    Q3Section.classList.add("block");
    Q3Section.classList.remove("hidden");
});

//QUESTION 2
//Q2 END
//###########################################################################



//###########################################################################
//QUESTION 3
//Q3 START

let Q3Lisbon = document.getElementById("Q3Lisbon");
let Q3Sofia = document.getElementById("Q3Sofia");
let Q3Minsk = document.getElementById("Q3Minsk");
let Q3Copenhagen = document.getElementById("Q3Copenhagen");

let Q4Section = document.getElementById("Q4Section");


Q3Sofia.addEventListener("click", function() {
    totalScore=totalScore + 1;
    document.getElementById("displayScore").innerHTML = totalScore;
    document.getElementById("Q3FinalAnswer").innerHTML = "Correct Answer!";
    
    Q3Sofia.classList.add("bg-green-500");
    Q3Sofia.classList.remove("hover:bg-orange-500");
    Q3Lisbon.classList.remove("hover:bg-orange-500");
    Q3Minsk.classList.remove("hover:bg-orange-500");
    Q3Copenhagen.classList.remove("hover:bg-orange-500");

    Q3Lisbon.disabled = true;
    Q3Sofia.disabled = true;
    Q3Minsk.disabled = true;
    Q3Copenhagen.disabled = true;

    Q4Section.classList.add("block");
    Q4Section.classList.remove("hidden");
});


Q3Lisbon.addEventListener("click", function() {
    document.getElementById("Q3FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q3Sofia.classList.add("bg-green-500");
    Q3Sofia.classList.remove("hover:bg-orange-500");
    Q3Lisbon.classList.remove("hover:bg-orange-500");
    Q3Minsk.classList.remove("hover:bg-orange-500");
    Q3Copenhagen.classList.remove("hover:bg-orange-500");

    Q3Lisbon.classList.add("bg-orange-500");

    Q3Lisbon.disabled = true;
    Q3Sofia.disabled = true;
    Q3Minsk.disabled = true;
    Q3Copenhagen.disabled = true;

    Q4Section.classList.add("block");
    Q4Section.classList.remove("hidden");
});


Q3Minsk.addEventListener("click", function() {
    document.getElementById("Q3FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q3Sofia.classList.add("bg-green-500");
    Q3Sofia.classList.remove("hover:bg-orange-500");
    Q3Lisbon.classList.remove("hover:bg-orange-500");
    Q3Minsk.classList.remove("hover:bg-orange-500");
    Q3Copenhagen.classList.remove("hover:bg-orange-500");

    Q3Minsk.classList.add("bg-orange-500");

    Q3Lisbon.disabled = true;
    Q3Sofia.disabled = true;
    Q3Minsk.disabled = true;
    Q3Copenhagen.disabled = true;

    Q4Section.classList.add("block");
    Q4Section.classList.remove("hidden");
});


Q3Copenhagen.addEventListener("click", function() {
    document.getElementById("Q3FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q3Sofia.classList.add("bg-green-500");
    Q3Sofia.classList.remove("hover:bg-orange-500");
    Q3Lisbon.classList.remove("hover:bg-orange-500");
    Q3Minsk.classList.remove("hover:bg-orange-500");
    Q3Copenhagen.classList.remove("hover:bg-orange-500");

    Q3Copenhagen.classList.add("bg-orange-500");

    Q3Lisbon.disabled = true;
    Q3Sofia.disabled = true;
    Q3Minsk.disabled = true;
    Q3Copenhagen.disabled = true;

    Q4Section.classList.add("block");
    Q4Section.classList.remove("hidden");
});


//QUESTION 3
//Q3 END
//###########################################################################



//###########################################################################
//QUESTION 4
//Q4 START

let Q4Oslo = document.getElementById("Q4Oslo");
let Q4Amsterdam = document.getElementById("Q4Amsterdam");
let Q4Stockholm = document.getElementById("Q4Stockholm");
let Q4Athens = document.getElementById("Q4Athens");

let Q5Section = document.getElementById("Q5Section");

Q4Oslo.addEventListener("click", function() {
    totalScore=totalScore + 1;
    document.getElementById("displayScore").innerHTML = totalScore;
    document.getElementById("Q4FinalAnswer").innerHTML = "Correct Answer!";
    
    Q4Oslo.classList.add("bg-green-500");
    Q4Oslo.classList.remove("hover:bg-orange-500");
    Q4Amsterdam.classList.remove("hover:bg-orange-500");
    Q4Stockholm.classList.remove("hover:bg-orange-500");
    Q4Athens.classList.remove("hover:bg-orange-500");

    Q4Oslo.disabled = true;
    Q4Amsterdam.disabled = true;
    Q4Stockholm.disabled = true;
    Q4Athens.disabled = true;

    Q5Section.classList.add("block");
    Q5Section.classList.remove("hidden");
});


Q4Amsterdam.addEventListener("click", function() {
    document.getElementById("Q4FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q4Oslo.classList.add("bg-green-500");
    Q4Oslo.classList.remove("hover:bg-orange-500");
    Q4Amsterdam.classList.remove("hover:bg-orange-500");
    Q4Stockholm.classList.remove("hover:bg-orange-500");
    Q4Athens.classList.remove("hover:bg-orange-500");

    Q4Amsterdam.classList.add("bg-orange-500");

    Q4Oslo.disabled = true;
    Q4Amsterdam.disabled = true;
    Q4Stockholm.disabled = true;
    Q4Athens.disabled = true;

    Q5Section.classList.add("block");
    Q5Section.classList.remove("hidden");
});


Q4Stockholm.addEventListener("click", function() {
    document.getElementById("Q4FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q4Oslo.classList.add("bg-green-500");
    Q4Oslo.classList.remove("hover:bg-orange-500");
    Q4Amsterdam.classList.remove("hover:bg-orange-500");
    Q4Stockholm.classList.remove("hover:bg-orange-500");
    Q4Athens.classList.remove("hover:bg-orange-500");

    Q4Stockholm.classList.add("bg-orange-500");

    Q4Oslo.disabled = true;
    Q4Amsterdam.disabled = true;
    Q4Stockholm.disabled = true;
    Q4Athens.disabled = true;

    Q5Section.classList.add("block");
    Q5Section.classList.remove("hidden");
});


Q4Athens.addEventListener("click", function() {
    document.getElementById("Q4FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q4Oslo.classList.add("bg-green-500");
    Q4Oslo.classList.remove("hover:bg-orange-500");
    Q4Amsterdam.classList.remove("hover:bg-orange-500");
    Q4Stockholm.classList.remove("hover:bg-orange-500");
    Q4Athens.classList.remove("hover:bg-orange-500");

    Q4Athens.classList.add("bg-orange-500");

    Q4Oslo.disabled = true;
    Q4Amsterdam.disabled = true;
    Q4Stockholm.disabled = true;
    Q4Athens.disabled = true;

    Q5Section.classList.add("block");
    Q5Section.classList.remove("hidden");
});


//QUESTION 4
//Q4 END
//###########################################################################



//###########################################################################
//QUESTION 5
//Q5 START

let Q5Paris = document.getElementById("Q5Paris");
let Q5Prague = document.getElementById("Q5Prague");
let Q5Moscow = document.getElementById("Q5Moscow");
let Q5Berlin = document.getElementById("Q5Berlin");

//let Q5Section = document.getElementById("Q5Section");

Q5Berlin.addEventListener("click", function() {
    totalScore=totalScore + 1;
    document.getElementById("displayScore").innerHTML = totalScore;
    document.getElementById("Q5FinalAnswer").innerHTML = "Correct Answer!";
    
    Q5Berlin.classList.add("bg-green-500");
    Q5Berlin.classList.remove("hover:bg-orange-500");
    Q5Paris.classList.remove("hover:bg-orange-500");
    Q5Prague.classList.remove("hover:bg-orange-500");
    Q5Moscow.classList.remove("hover:bg-orange-500");

    Q5Berlin.disabled = true;
    Q5Paris.disabled = true;
    Q5Moscow.disabled = true;
    Q5Prague.disabled = true;

    //Q5Section.classList.add("block");
    //Q5Section.classList.remove("hidden");
});


Q5Paris.addEventListener("click", function() {
    document.getElementById("Q5FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q5Berlin.classList.add("bg-green-500");
    Q5Berlin.classList.remove("hover:bg-orange-500");
    Q5Paris.classList.remove("hover:bg-orange-500");
    Q5Prague.classList.remove("hover:bg-orange-500");
    Q5Moscow.classList.remove("hover:bg-orange-500");

    Q5Paris.classList.add("bg-orange-500");

    Q5Berlin.disabled = true;
    Q5Paris.disabled = true;
    Q5Moscow.disabled = true;
    Q5Prague.disabled = true;

    //Q5Section.classList.add("block");
    //Q5Section.classList.remove("hidden");
});


Q5Prague.addEventListener("click", function() {
    document.getElementById("Q5FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q5Berlin.classList.add("bg-green-500");
    Q5Berlin.classList.remove("hover:bg-orange-500");
    Q5Paris.classList.remove("hover:bg-orange-500");
    Q5Prague.classList.remove("hover:bg-orange-500");
    Q5Moscow.classList.remove("hover:bg-orange-500");

    Q5Prague.classList.add("bg-orange-500");

    Q5Berlin.disabled = true;
    Q5Paris.disabled = true;
    Q5Moscow.disabled = true;
    Q5Prague.disabled = true;

    //Q5Section.classList.add("block");
    //Q5Section.classList.remove("hidden");
});


Q5Moscow.addEventListener("click", function() {
    document.getElementById("Q5FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q5Berlin.classList.add("bg-green-500");
    Q5Berlin.classList.remove("hover:bg-orange-500");
    Q5Paris.classList.remove("hover:bg-orange-500");
    Q5Prague.classList.remove("hover:bg-orange-500");
    Q5Moscow.classList.remove("hover:bg-orange-500");

    Q5Moscow.classList.add("bg-orange-500");

    Q5Berlin.disabled = true;
    Q5Paris.disabled = true;
    Q5Moscow.disabled = true;
    Q5Prague.disabled = true;

    //Q5Section.classList.add("block");
    //Q5Section.classList.remove("hidden");
});


//QUESTION 5
//Q5 END
//###########################################################################