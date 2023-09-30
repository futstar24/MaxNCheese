shownMenuElement = document.getElementById("home")

Array.from(document.getElementsByClassName("menuElement")).forEach(menuElement => {
    if (menuElement.tagName == "P") {
        console.log("hi")
        text = menuElement.innerHTML
        menuElement.addEventListener("click", function() {
            shownMenuElement.style.color = "#8F8F8E"
            shownMenuElement = menuElement
            shownMenuElement.style.color = "#444444"
        })
    }
})