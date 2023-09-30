shownMenuElement = document.getElementById("all")

Array.from(document.getElementsByClassName("menuElement")).forEach(menuElement => {
    text = menuElement.innerHTML
    menuElement.addEventListener("click", function() {
        shownMenuElement.style.color = "#8F8F8E"
        shownMenuElement = menuElement
        shownMenuElement.style.color = "#444444"
    })
})