const discoverBox = document.getElementById("Discover-box")
if(discoverBox){
    discoverBox.addEventListener("click", function(){
        window.location.href = "question.html";
    });
}

const questionBos = document.getElementById("question-box");

if(questionBos){
    questionBos.addEventListener("click", function(){
        window.location.href = "index.html";
    });
}
