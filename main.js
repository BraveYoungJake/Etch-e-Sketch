///
var wrapper = document.createElement("div")
wrapper.classList.add("wrapper")
document.body.appendChild(wrapper)

var outerBlock = document.createElement("div")
wrapper.classList.add("outer-block")
wrapper.appendChild(outerBlock)
///

///
var titleblock = document.createElement("section")
outerBlock.appendChild(titleblock)

var title = document.createElement("h1")
title.innerHTML = "Etch-E-Sketch"
titleblock.appendChild(title)

var subTitle = document.createElement("h3")
subTitle.innerHTML = "Hover your mouse across the box below to start drawing with Java!"
titleblock.appendChild(subTitle)
///

///

buttonContainer = document.createElement("section")
buttonContainer.classList.add("button-container")
outerBlock.appendChild(buttonContainer)

resetButton = document.createElement("button")
resetButton.innerHTML = "Reset Grid"
resetButton.setAttribute("id", "reset-button")
buttonContainer.appendChild(resetButton)

colorButton = document.createElement("button")
colorButton.innerHTML = "Change Colors"
colorButton.setAttribute("id", "color-button")
buttonContainer.appendChild(colorButton)

///

///
var container = document.createElement("div")
container.classList.add("container")
outerBlock.appendChild(container)

for(i=1;i <= 256; i++) {
var gridbox = document.createElement("div")
gridbox.classList.add("grid-box");
gridbox.setAttribute("id", `box-${i}`)
gridbox.setAttribute("style", "width: 60px; height: 60px;")
container.appendChild(gridbox);
}
///


var myColor = document.getElementsByClassName("grid-box");

for (var i = 0; i < myColor.length; i++) {
    myColor[i].addEventListener("mouseover", function(){
        this.style.backgroundColor = "black";
    })
}

document.getElementById("reset-button").addEventListener("click", function() {
    for (var i= 0; i < myColor.length; i++) {
        myColor[i].style.backgroundColor = none;
    }
})

