totalScore = 0;
document.getElementById("displayScore").innerHTML = 0;

let resetButton = document.getElementById("resetButton");
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

resetButton.addEventListener("click", function() {
    location.reload(true);
});

scrollToTopBtn.addEventListener("click", function(){

    window.scrollTo({ top: 0, behavior: 'smooth'});

})



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

let Q6Section = document.getElementById("Q6Section");

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

    Q6Section.classList.add("block");
    Q6Section.classList.remove("hidden");
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

    Q6Section.classList.add("block");
    Q6Section.classList.remove("hidden");
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

    Q6Section.classList.add("block");
    Q6Section.classList.remove("hidden");
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

    Q6Section.classList.add("block");
    Q6Section.classList.remove("hidden");
});

//QUESTION 5
//Q5 END
//###########################################################################




//###########################################################################
//QUESTION 6
//Q6 START

let Q6Brussels = document.getElementById("Q6Brussels");
let Q6Amsterdam = document.getElementById("Q6Amsterdam");
let Q6Rome = document.getElementById("Q6Rome");
let Q6Madrid = document.getElementById("Q6Madrid");

let Q7Section = document.getElementById("Q7Section");

Q6Brussels.addEventListener("click", function() {
    totalScore=totalScore + 1;
    document.getElementById("displayScore").innerHTML = totalScore;
    document.getElementById("Q6FinalAnswer").innerHTML = "Correct Answer!";
    
    Q6Brussels.classList.add("bg-green-500");
    Q6Brussels.classList.remove("hover:bg-orange-500");
    Q6Amsterdam.classList.remove("hover:bg-orange-500");
    Q6Rome.classList.remove("hover:bg-orange-500");
    Q6Madrid.classList.remove("hover:bg-orange-500");

    Q6Brussels.disabled = true;
    Q6Amsterdam.disabled = true;
    Q6Rome.disabled = true;
    Q6Madrid.disabled = true;

    Q7Section.classList.add("block");
    Q7Section.classList.remove("hidden");
});


Q6Amsterdam.addEventListener("click", function() {
    document.getElementById("Q6FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q6Brussels.classList.add("bg-green-500");
    Q6Brussels.classList.remove("hover:bg-orange-500");
    Q6Amsterdam.classList.remove("hover:bg-orange-500");
    Q6Rome.classList.remove("hover:bg-orange-500");
    Q6Madrid.classList.remove("hover:bg-orange-500");

    Q6Amsterdam.classList.add("bg-orange-500");

    Q6Brussels.disabled = true;
    Q6Amsterdam.disabled = true;
    Q6Rome.disabled = true;
    Q6Madrid.disabled = true;

    Q7Section.classList.add("block");
    Q7Section.classList.remove("hidden");
});

Q6Rome.addEventListener("click", function() {
    document.getElementById("Q6FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q6Brussels.classList.add("bg-green-500");
    Q6Brussels.classList.remove("hover:bg-orange-500");
    Q6Amsterdam.classList.remove("hover:bg-orange-500");
    Q6Rome.classList.remove("hover:bg-orange-500");
    Q6Madrid.classList.remove("hover:bg-orange-500");

    Q6Rome.classList.add("bg-orange-500");

    Q6Brussels.disabled = true;
    Q6Amsterdam.disabled = true;
    Q6Rome.disabled = true;
    Q6Madrid.disabled = true;

    Q7Section.classList.add("block");
    Q7Section.classList.remove("hidden");
});


Q6Madrid.addEventListener("click", function() {
    document.getElementById("Q6FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q6Brussels.classList.add("bg-green-500");
    Q6Brussels.classList.remove("hover:bg-orange-500");
    Q6Amsterdam.classList.remove("hover:bg-orange-500");
    Q6Rome.classList.remove("hover:bg-orange-500");
    Q6Madrid.classList.remove("hover:bg-orange-500");

    Q6Madrid.classList.add("bg-orange-500");

    Q6Brussels.disabled = true;
    Q6Amsterdam.disabled = true;
    Q6Rome.disabled = true;
    Q6Madrid.disabled = true;

    Q7Section.classList.add("block");
    Q7Section.classList.remove("hidden");
});


//QUESTION 6
//Q6 END
//###########################################################################





//###########################################################################
//QUESTION 7
//Q7 START

let Q7Madrid = document.getElementById("Q7Madrid");
let Q7Rome = document.getElementById("Q7Rome");
let Q7Athens = document.getElementById("Q7Athens");
let Q7Warsaw = document.getElementById("Q7Warsaw");

let Q8Section = document.getElementById("Q8Section");


Q7Rome.addEventListener("click", function() {
    totalScore=totalScore + 1;
    document.getElementById("displayScore").innerHTML = totalScore;
    document.getElementById("Q7FinalAnswer").innerHTML = "Correct Answer!";
    
    Q7Rome.classList.add("bg-green-500");
    Q7Rome.classList.remove("hover:bg-orange-500");
    Q7Madrid.classList.remove("hover:bg-orange-500");
    Q7Athens.classList.remove("hover:bg-orange-500");
    Q7Warsaw.classList.remove("hover:bg-orange-500");

    Q7Rome.disabled = true;
    Q7Madrid.disabled = true;
    Q7Athens.disabled = true;
    Q7Warsaw.disabled = true;

    Q8Section.classList.add("block");
    Q8Section.classList.remove("hidden");
});



Q7Madrid.addEventListener("click", function() {
    document.getElementById("Q7FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q7Rome.classList.add("bg-green-500");
    Q7Rome.classList.remove("hover:bg-orange-500");
    Q7Madrid.classList.remove("hover:bg-orange-500");
    Q7Athens.classList.remove("hover:bg-orange-500");
    Q7Warsaw.classList.remove("hover:bg-orange-500");

    Q7Madrid.classList.add("bg-orange-500");

    Q7Rome.disabled = true;
    Q7Madrid.disabled = true;
    Q7Athens.disabled = true;
    Q7Warsaw.disabled = true;

    Q8Section.classList.add("block");
    Q8Section.classList.remove("hidden");
});


Q7Athens.addEventListener("click", function() {
    document.getElementById("Q7FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q7Rome.classList.add("bg-green-500");
    Q7Rome.classList.remove("hover:bg-orange-500");
    Q7Madrid.classList.remove("hover:bg-orange-500");
    Q7Athens.classList.remove("hover:bg-orange-500");
    Q7Warsaw.classList.remove("hover:bg-orange-500");

    Q7Athens.classList.add("bg-orange-500");

    Q7Rome.disabled = true;
    Q7Madrid.disabled = true;
    Q7Athens.disabled = true;
    Q7Warsaw.disabled = true;

    Q8Section.classList.add("block");
    Q8Section.classList.remove("hidden");
});


Q7Warsaw.addEventListener("click", function() {
    document.getElementById("Q7FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q7Rome.classList.add("bg-green-500");
    Q7Rome.classList.remove("hover:bg-orange-500");
    Q7Madrid.classList.remove("hover:bg-orange-500");
    Q7Athens.classList.remove("hover:bg-orange-500");
    Q7Warsaw.classList.remove("hover:bg-orange-500");

    Q7Warsaw.classList.add("bg-orange-500");

    Q7Rome.disabled = true;
    Q7Madrid.disabled = true;
    Q7Athens.disabled = true;
    Q7Warsaw.disabled = true;

    Q8Section.classList.add("block");
    Q8Section.classList.remove("hidden");
});

//QUESTION 7
//Q7 END
//###########################################################################




//###########################################################################
//QUESTION 8
//Q8 START

let Q8Amsterdam = document.getElementById("Q8Amsterdam");
let Q8Bucharest = document.getElementById("Q8Bucharest");
let Q8Vienna = document.getElementById("Q8Vienna");
let Q8Lisbon = document.getElementById("Q8Lisbon");

let Q9Section = document.getElementById("Q9Section");


Q8Lisbon.addEventListener("click", function() {
    totalScore=totalScore + 1;
    document.getElementById("displayScore").innerHTML = totalScore;
    document.getElementById("Q8FinalAnswer").innerHTML = "Correct Answer!";
    
    Q8Lisbon.classList.add("bg-green-500");
    Q8Lisbon.classList.remove("hover:bg-orange-500");
    Q8Amsterdam.classList.remove("hover:bg-orange-500");
    Q8Bucharest.classList.remove("hover:bg-orange-500");
    Q8Vienna.classList.remove("hover:bg-orange-500");

    Q8Lisbon.disabled = true;
    Q8Amsterdam.disabled = true;
    Q8Bucharest.disabled = true;
    Q8Vienna.disabled = true;

    Q9Section.classList.add("block");
    Q9Section.classList.remove("hidden");
});



Q8Amsterdam.addEventListener("click", function() {
    document.getElementById("Q8FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q8Lisbon.classList.add("bg-green-500");
    Q8Lisbon.classList.remove("hover:bg-orange-500");
    Q8Amsterdam.classList.remove("hover:bg-orange-500");
    Q8Bucharest.classList.remove("hover:bg-orange-500");
    Q8Vienna.classList.remove("hover:bg-orange-500");

    Q8Amsterdam.classList.add("bg-orange-500");

    Q8Lisbon.disabled = true;
    Q8Amsterdam.disabled = true;
    Q8Bucharest.disabled = true;
    Q8Vienna.disabled = true;

    Q9Section.classList.add("block");
    Q9Section.classList.remove("hidden");
});


Q8Bucharest.addEventListener("click", function() {
    document.getElementById("Q8FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q8Lisbon.classList.add("bg-green-500");
    Q8Lisbon.classList.remove("hover:bg-orange-500");
    Q8Amsterdam.classList.remove("hover:bg-orange-500");
    Q8Bucharest.classList.remove("hover:bg-orange-500");
    Q8Vienna.classList.remove("hover:bg-orange-500");

    Q8Bucharest.classList.add("bg-orange-500");

    Q8Lisbon.disabled = true;
    Q8Amsterdam.disabled = true;
    Q8Bucharest.disabled = true;
    Q8Vienna.disabled = true;

    Q9Section.classList.add("block");
    Q9Section.classList.remove("hidden");
});


Q8Vienna.addEventListener("click", function() {
    document.getElementById("Q8FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q8Lisbon.classList.add("bg-green-500");
    Q8Lisbon.classList.remove("hover:bg-orange-500");
    Q8Amsterdam.classList.remove("hover:bg-orange-500");
    Q8Bucharest.classList.remove("hover:bg-orange-500");
    Q8Vienna.classList.remove("hover:bg-orange-500");

    Q8Vienna.classList.add("bg-orange-500");

    Q8Lisbon.disabled = true;
    Q8Amsterdam.disabled = true;
    Q8Bucharest.disabled = true;
    Q8Vienna.disabled = true;

    Q9Section.classList.add("block");
    Q9Section.classList.remove("hidden");
});

//QUESTION 8
//Q8 END
//###########################################################################



//###########################################################################
//QUESTION 9
//Q9 START

let Q9Zagreb = document.getElementById("Q9Zagreb");
let Q9Belgrade = document.getElementById("Q9Belgrade");
let Q9Sarajevo = document.getElementById("Q9Sarajevo");
let Q9Ljubljana = document.getElementById("Q9Ljubljana");

let Q10Section = document.getElementById("Q10Section");


Q9Zagreb.addEventListener("click", function() {
    totalScore=totalScore + 1;
    document.getElementById("displayScore").innerHTML = totalScore;
    document.getElementById("Q9FinalAnswer").innerHTML = "Correct Answer!";
    
    Q9Zagreb.classList.add("bg-green-500");
    Q9Zagreb.classList.remove("hover:bg-orange-500");
    Q9Belgrade.classList.remove("hover:bg-orange-500");
    Q9Sarajevo.classList.remove("hover:bg-orange-500");
    Q9Ljubljana.classList.remove("hover:bg-orange-500");

    Q9Zagreb.disabled = true;
    Q9Belgrade.disabled = true;
    Q9Sarajevo.disabled = true;
    Q9Ljubljana.disabled = true;

    Q10Section.classList.add("block");
    Q10Section.classList.remove("hidden");
});


Q9Belgrade.addEventListener("click", function() {
    document.getElementById("Q9FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q9Zagreb.classList.add("bg-green-500");
    Q9Zagreb.classList.remove("hover:bg-orange-500");
    Q9Belgrade.classList.remove("hover:bg-orange-500");
    Q9Sarajevo.classList.remove("hover:bg-orange-500");
    Q9Ljubljana.classList.remove("hover:bg-orange-500");

    Q9Belgrade.classList.add("bg-orange-500");

    Q9Zagreb.disabled = true;
    Q9Belgrade.disabled = true;
    Q9Sarajevo.disabled = true;
    Q9Ljubljana.disabled = true;

    Q10Section.classList.add("block");
    Q10Section.classList.remove("hidden");
});


Q9Sarajevo.addEventListener("click", function() {
    document.getElementById("Q9FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q9Zagreb.classList.add("bg-green-500");
    Q9Zagreb.classList.remove("hover:bg-orange-500");
    Q9Belgrade.classList.remove("hover:bg-orange-500");
    Q9Sarajevo.classList.remove("hover:bg-orange-500");
    Q9Ljubljana.classList.remove("hover:bg-orange-500");

    Q9Sarajevo.classList.add("bg-orange-500");

    Q9Zagreb.disabled = true;
    Q9Belgrade.disabled = true;
    Q9Sarajevo.disabled = true;
    Q9Ljubljana.disabled = true;

    Q10Section.classList.add("block");
    Q10Section.classList.remove("hidden");
});


Q9Ljubljana.addEventListener("click", function() {
    document.getElementById("Q9FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q9Zagreb.classList.add("bg-green-500");
    Q9Zagreb.classList.remove("hover:bg-orange-500");
    Q9Belgrade.classList.remove("hover:bg-orange-500");
    Q9Sarajevo.classList.remove("hover:bg-orange-500");
    Q9Ljubljana.classList.remove("hover:bg-orange-500");

    Q9Ljubljana.classList.add("bg-orange-500");

    Q9Zagreb.disabled = true;
    Q9Belgrade.disabled = true;
    Q9Sarajevo.disabled = true;
    Q9Ljubljana.disabled = true;

    Q10Section.classList.add("block");
    Q10Section.classList.remove("hidden");
});

//QUESTION 9
//Q9 END
//###########################################################################



//###########################################################################
//QUESTION 10
//Q10 START

let Q10Bratislava = document.getElementById("Q10Bratislava");
let Q10Athens = document.getElementById("Q10Athens");
let Q10Madrid = document.getElementById("Q10Madrid");
let Q10Prague = document.getElementById("Q10Prague");

let quizFinished = document.getElementById("quizFinished");

Q10Madrid.addEventListener("click", function() {
    totalScore=totalScore + 1;
    document.getElementById("displayScore").innerHTML = totalScore;
    document.getElementById("Q10FinalAnswer").innerHTML = "Correct Answer!";
    
    Q10Madrid.classList.add("bg-green-500");
    Q10Madrid.classList.remove("hover:bg-orange-500");
    Q10Bratislava.classList.remove("hover:bg-orange-500");
    Q10Athens.classList.remove("hover:bg-orange-500");
    Q10Prague.classList.remove("hover:bg-orange-500");

    Q10Madrid.disabled = true;
    Q10Bratislava.disabled = true;
    Q10Athens.disabled = true;
    Q10Prague.disabled = true;

    quizFinished.classList.add("block");
    quizFinished.classList.remove("hidden");
});


Q10Bratislava.addEventListener("click", function() {
    document.getElementById("Q10FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q10Madrid.classList.add("bg-green-500");
    Q10Madrid.classList.remove("hover:bg-orange-500");
    Q10Bratislava.classList.remove("hover:bg-orange-500");
    Q10Athens.classList.remove("hover:bg-orange-500");
    Q10Prague.classList.remove("hover:bg-orange-500");

    Q10Bratislava.classList.add("bg-orange-500");

    Q10Madrid.disabled = true;
    Q10Bratislava.disabled = true;
    Q10Athens.disabled = true;
    Q10Prague.disabled = true;

    quizFinished.classList.add("block");
    quizFinished.classList.remove("hidden");
});


Q10Athens.addEventListener("click", function() {
    document.getElementById("Q10FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q10Madrid.classList.add("bg-green-500");
    Q10Madrid.classList.remove("hover:bg-orange-500");
    Q10Bratislava.classList.remove("hover:bg-orange-500");
    Q10Athens.classList.remove("hover:bg-orange-500");
    Q10Prague.classList.remove("hover:bg-orange-500");

    Q10Athens.classList.add("bg-orange-500");

    Q10Madrid.disabled = true;
    Q10Bratislava.disabled = true;
    Q10Athens.disabled = true;
    Q10Prague.disabled = true;

    quizFinished.classList.add("block");
    quizFinished.classList.remove("hidden");
});


Q10Prague.addEventListener("click", function() {
    document.getElementById("Q10FinalAnswer").innerHTML = "Wrong Answer!";
    
    Q10Madrid.classList.add("bg-green-500");
    Q10Madrid.classList.remove("hover:bg-orange-500");
    Q10Bratislava.classList.remove("hover:bg-orange-500");
    Q10Athens.classList.remove("hover:bg-orange-500");
    Q10Prague.classList.remove("hover:bg-orange-500");

    Q10Prague.classList.add("bg-orange-500");

    Q10Madrid.disabled = true;
    Q10Bratislava.disabled = true;
    Q10Athens.disabled = true;
    Q10Prague.disabled = true;

    quizFinished.classList.add("block");
    quizFinished.classList.remove("hidden");
});


//QUESTION 10
//Q10 END
//###########################################################################