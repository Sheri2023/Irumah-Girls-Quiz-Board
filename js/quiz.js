function check() {
    var c=1;
    var q1=document.quiz.q1.value;
    var q2=document.quiz.q2.value;
    var q3=document.quiz.q3.value;
    var q4=document.quiz.q4.value;
    var q5=document.quiz.q5.value;
    var result=document.getElementById("result");
    var quiz=document.getElementById("quiz");
   
    if (q1=="Tags") {c++}
    if (q2=="Programming") {c++}
    if (q3=="Cascading style sheet") {c++}
    if (q4==".js") {c++}
    if (q5=="Function Literal") {c++}
    
        
    if (c<=3) {
      result.textcontent="Your result is ${c}.You have performed poorly,please Retake!"
    } else {
      result.textcontent="Your result is ${c}.Well done! You have fairly passed!!" 
    }  
}
