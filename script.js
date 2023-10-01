Array.from(document.getElementsByClassName("albumGridElement")).forEach(albumGridElement => {
    originalText = ""
    albumText = ""
    albumChildren = albumGridElement.children
    photo = ""
    Array.from(albumChildren).forEach(element => {
        if (element.tagName == "P") {
            originalText = element.innerHTML
        } else {
            photo = element
        }
    })
    albumGridElement.addEventListener("click", function() {
        albumChildren = albumGridElement.childNodes
        albumChildren.forEach(element => {
            if (element.tagName == "P") {
                albumText = element.innerHTML.toLowerCase().replace(/\s/g,"")
            }
        })
        window.open("https://maxncheesephotography.pic-time.com/-"+albumText+"/gallery","_blank")
    })
    photoName = 'albums/'+originalText+'/CoverPhoto.jpeg'
    photo.style.background = `url("${photoName}") no-repeat`
    photo.style.backgroundSize = "20vw"
    photo.style.animation = "fadeIn 0.5s"
})

subMenuElements = []

Array.from(document.getElementsByClassName("subMenuElement")).forEach(element => {
    subMenuElements.push(element)
    element.style.opacity = "0"
    element.addEventListener("click",function() {
        if (shownMenuElement != document.getElementById("about").children[0]) {
            shownMenuElement.style.color = "#8F8F8E"
            shownMenuElement = document.getElementById("about").children[0]
            shownMenuElement.style.color = "#444444"
            showPage("About")
            document.getElementById(element.innerHTML).scrollIntoView({behavior: "smooth"})
        } else {
            document.getElementById(element.innerHTML).scrollIntoView({behavior: "smooth"})
        }
    })
})



about.addEventListener("mouseover", function() {
    subMenuElements.forEach(element => {
        element.style.opacity = "1"
        element.style.animation = "fadeIn 0.5s"
    })
})

about.addEventListener("mouseout",function(){
    subMenuElements.forEach(element => {
        element.style.opacity = "0"
        element.style.animation = "fadeOut 0.5s"
    })
})

document.body.addEventListener("click",function() {
    console.log(document.querySelectorAll(":hover"))
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
            if (menuElement != shownMenuElement && !switching) {
                shownMenuElement.style.color = "#8F8F8E"
                shownMenuElement = menuElement
                shownMenuElement.style.color = "#444444"
                showPage(shownMenuElement.innerHTML)
            }
        })
    }
})

switching = false

function showPage(pageDesc) {
    switching = true
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
        switching = false
    }, "500")
}

images = ["scrollImages/Aayan_Final Headshot_1_SCREEN.jpg","scrollImages/Edited_Prom_Photo_5.jpg","scrollImages/IMG_8967.JPG","scrollImages/VANESSA_Final Headshot_1_SCREEN.jpg","scrollImages/IMG_9379.jpg","scrollImages/Julia_Final Headshot_3.jpg","scrollImages/IMG_9529.jpg","scrollImages/Sofia_Final Headshot_SCREEN-2.jpg","scrollImages/IMG_9559.jpg"]

index = 0

leftArrow = document.getElementById("leftArrow")
rightArrow = document.getElementById("rightArrow")

placeImages()

rightArrow.addEventListener("click",function(){
    if (index == 0) {
        index = images.length-1
    } else {
        index -= 1
    }
    placeImages()
})

leftArrow.addEventListener("click",function(){
    if (index == images.length-1) {
        index = 0
    } else {
        index += 1
    }
    placeImages()
})

function placeImages() {
    left = 0
    if (index-1 < 0) {
        left = images.length-1
    } else {
        left = index-1
    }
    right = 0
    if (index+1 == images.length) {
        right = 0
    } else {
        right = index+1
    }
    document.getElementById("leftImage").src = images[left]
    document.getElementById("centerImage").src = images[index]
    document.getElementById("rightImage").src = images[right]
}