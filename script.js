
Array.from(document.getElementsByClassName("albumGridElement")).forEach(albumGridElement => {
    albumGridElement.addEventListener("click", function() {
        albumChildren = albumGridElement.childNodes
        text = ""
        albumChildren.forEach(element => {
            if (element.tagName == "P") {
                text = element.innerHTML.toLowerCase().replace(/\s/g,"")
            }
        })
        window.open("https://maxncheesephotography.pic-time.com/-"+text+"/gallery","_blank")
    })
})

socials = document.getElementById("socials")
socials.parentElement.removeChild(socials)
pages = []

Array.from(document.getElementsByClassName("page")).forEach(page => {
    clonedSocials = socials.cloneNode(true)
    page.appendChild(clonedSocials)
    pages.push(page)
    page.parentElement.removeChild(page)
})


currentPage = pages[0]

document.getElementById("pageContent").appendChild(currentPage)

shownMenuElement = document.getElementById("home")

Array.from(document.getElementsByClassName("menuElement")).forEach(menuElement => {
    if (menuElement.tagName == "P") {
        console.log("hi")
        text = menuElement.innerHTML
        menuElement.addEventListener("click", function() {
            if (menuElement != shownMenuElement) {
                shownMenuElement.style.color = "#8F8F8E"
                shownMenuElement = menuElement
                shownMenuElement.style.color = "#444444"
                showPage(shownMenuElement.innerHTML)
            }
        })
    }
})


function showPage(pageDesc) {
    removingPage = currentPage
    removingPage.style.animation = "fadeOut 0.5s"
    pages.forEach(page => {
        if (page.id == pageDesc) {
            currentPage = page
        }
    })
    document.getElementById("pageContent").appendChild(currentPage)
    currentPage.style.animation = "fadeIn 0.5s"

    setTimeout(function(){
        removingPage.parentElement.removeChild(removingPage)
    }, "500")
}