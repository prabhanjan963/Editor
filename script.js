var textarea = document.getElementById('text-area');

function fontsize(a){
    var sizevalue = a.value;
    textarea.style.fontSize = sizevalue + "px";
}

function left(){
    textarea.style.textAlign ="left";
}

function center(){
    textarea.style.textAlign = "center";
}

function right(){
    textarea.style.textAlign = "right";
}

  function bold(){
    textarea.style.fontWeight = "bold";
}

function italic(){
    textarea.style.fontStyle = "italic";
}

function underline(){
    textarea.style.textDecoration = "underline";
}

function textcolor(e){
    var textcolor = e.value;
    textarea.style.color = textcolor;
}

function bgcolor(e){
    var bgcolor = e.value;
    textarea.style.background = bgcolor;
}

function textdel(){
    textarea.innerHTML = "";
}
