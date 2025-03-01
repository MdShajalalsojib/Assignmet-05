const discoverBox = document.getElementById("Discover-box")
if(discoverBox){
    discoverBox.addEventListener("click", function(){
        window.location.href = "question.html";
    });
}

document.getElementById("question-box").addEventListener("click", function(){
    window.location.href = "index.html";
});