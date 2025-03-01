const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan", "lime", "pewter", "mint", "ice blue"];
function changeBG(){
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

document.getElementById("color-but").addEventListener("click",changeBG);