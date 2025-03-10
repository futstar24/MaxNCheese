listMenu = document.getElementById("listMenu")

logo = document.getElementById("menuLogo")

listMenuIcon = document.getElementById("menuIconDiv")

listHomeLabel = document.getElementById("listHome")

homeLabel = document.getElementById("home")

shownMenuElement = document.getElementById("home")

listAbout = document.getElementById("listAbout")

images = ["scrollImages/DianaFinalHeadshots-7 2.jpg","scrollImages/Lily.jpg","scrollImages/Julia_Final Headshot_3 2.jpg","scrollImages/Edward Headshots-4 2.jpg","scrollImages/cassidy-1 2.jpg","scrollImages/Sofia_Final Headshot_SCREEN-2 2.jpg","scrollImages/MelinaFinalHeadshots-3 2.jpg"]

index = 0

Array.from(document.getElementsByClassName("barMenu")).forEach(menuElement => {
    if (menuElement.tagName == "P") {
        text = menuElement.innerHTML
        menuElement.addEventListener("click", function() {
            if (menuElement != shownMenuElement && !switching) {
                shownMenuElement.style.color = "#8F8F8E"
                if (shownMenuElement.id == "about") {
                    shownMenuElement.children[0].style.color = "#8F8F8E"
                }
                shownMenuElement = menuElement
                shownMenuElement.style.color = "#444444"
                showPage(shownMenuElement.innerHTML)
            }
        })
    }
})

logo.addEventListener("click", function() {
    if (shownListMenuElement.innerHTML != "Home" && window.innerWidth < 750) {
        shownListMenuElement.style.color = "#8F8F8E"
        shownListMenuElement = listHomeLabel
        shownListMenuElement.style.color = "#444444"
        showPage("Home")
    }
    else if (shownMenuElement.innerHTML != "Home" && window.innerWidth >= 750) {
        shownMenuElement.style.color = "#8F8F8E"
        if (shownMenuElement.id == "about") {
            shownMenuElement.children[0].style.color = "#8F8F8E"
        }
        shownMenuElement = document.getElementById("home")
        shownMenuElement.style.color = "#444444"
        showPage(shownMenuElement.innerHTML)
    }
})


listMenuElements = []
Array.from(document.getElementsByClassName("listMenuElement")).forEach(element => {
    if (element.id != "listAbout") {
        listMenuElements.push(element)
    }
})

menuElements = []
Array.from(document.getElementsByClassName("barMenu")).forEach(element => {
    if (element.innerHTML != "About") {
        menuElements.push(element)
    }
})

leftImage = document.getElementById("leftImage")
rightImage = document.getElementById("rightImage")
centerImage = document.getElementById("centerImage")
homeImage = document.getElementById("homeImage")

leftArrow = document.getElementById("leftArrow")

rightArrow = document.getElementById("rightArrow")

leftArrow.addEventListener("click",shiftImagesRight)

rightArrow.addEventListener("click",shiftImagesLeft)

showingListMenu = false

listAboutElements = []

shownListMenuElement = document.getElementById("listHome")

shownListMenuElement.style.color = "#444444"

homePhoto = document.getElementById("homePhoto")

homePhotoScroll = document.getElementById("homePhotoScroll")

listSubMenuElements = []


photoOptions = document.getElementById("photoOptions")

document.getElementById("leftImage").src = images[images.length-1]
document.getElementById("centerImage").src = images[0]
document.getElementById("rightImage").src = images[1]

document.getElementById("homeImage").src = images[0]

homePhoto.parentElement.removeChild(homePhoto)

Array.from(document.getElementsByClassName("listAboutElement")).forEach(element => {
    listSubMenuElements.push(element)
    element.addEventListener("click",function() {
        if (shownListMenuElement != document.getElementById("listItemAbout")) {
            shownListMenuElement.style.color = "#8F8F8E"
            shownListMenuElement = document.getElementById("listItemAbout")
            shownListMenuElement.style.color = "#444444"
            showPage("About")
            listMenu.style.animation = "fadeOut 0.5s"
            setTimeout(function(){
                showingListMenu = false
                listMenu.parentElement.removeChild(listMenu)
            }, 500)
            document.body.style.overflow = "scroll"
            document.getElementById(element.innerHTML).scrollIntoView({behavior: "smooth"})
        } else {
            listMenu.style.animation = "fadeOut 0.5s"
            setTimeout(function(){
                showingListMenu = false
                listMenu.parentElement.removeChild(listMenu)
            }, 500)
            document.body.style.overflow = "scroll"
            document.getElementById(element.innerHTML).scrollIntoView({behavior: "smooth"})
        }
    })
})




Array.from(document.getElementsByClassName("listAboutElement")).forEach(element => {
    listAboutElements.push(element)
    element.parentElement.removeChild(element)
})

listAbout.addEventListener("mouseover", function() {
    listAboutElements.forEach(element => {
        listAbout.appendChild(element)
    })
})

listAbout.addEventListener("mouseout",function(){
    listAboutElements.forEach(element => {
       if (!Array.from(document.querySelectorAll(":hover")).includes(element)) {
        element.parentElement.removeChild(element)
       }
    })
})


Array.from(document.getElementsByClassName("listMenuElement")).forEach(menuElement => {
    if (menuElement.id != "listAbout") {
        text = menuElement.innerHTML
        menuElement.addEventListener("click", function() {
            if (menuElement != shownListMenuElement && !switching) {
                shownListMenuElement.style.color = "#8F8F8E"
                shownListMenuElement = menuElement
                shownListMenuElement.style.color = "#444444"
                showPage(shownListMenuElement.innerHTML)
                listMenu.style.animation = "fadeOut 0.5s"
                setTimeout(function(){
                    showingListMenu = false
                    listMenu.parentElement.removeChild(listMenu)
                }, 500)
                document.body.style.overflow = "scroll"
            } else if (!switching) {
                listMenu.style.animation = "fadeOut 0.5s"
                setTimeout(function(){
                    showingListMenu = false
                    listMenu.parentElement.removeChild(listMenu)
                }, 500)
                document.body.style.overflow = "scroll"
            }
        })
    }
})

listMenu.parentElement.removeChild(listMenu)
document.body.style.overflow = "scroll"

listMenuIcon.addEventListener("click",function() {
    if (showingListMenu) {
        showingListMenu = false
        listMenu.style.animation = "fadeOut 0.5s"
        setTimeout(function(){
            listMenu.parentElement.removeChild(listMenu)
        }, 500)
        document.body.style.overflow = "visible"
    } else {
        showingListMenu = true
        document.body.appendChild(listMenu)
        document.body.style.overflow = "hidden"
        listMenu.style.animation = "fadeIn 0.5s"
    }
})

function setTestimonials() {
    testimonialText=""
    fetch("Testimonials/testimonials.txt")
    .then(response => response.text())
    .then(text => {
        testimonialList = text.split("\n")
        testimonialCount = testimonialList.length
        testimonialCount -= 1
    })
}

testimonialCount = 0
testimonialList = []
testimonialGrid = document.getElementById("testimonialGrid")

setTestimonials()

setTimeout(function() {
    for(i=0;i<testimonialCount;i+=2) {
        testimonial = document.createElement("div")
        testimonial.classList.add("testimonialDiv")
        nameElement = document.createElement("p")
        nameElement.classList.add("testimonialName")
        nameElement.innerHTML = testimonialList[i]
        descElement = document.createElement("p")
        descElement.classList.add("testimonialDesc")
        descElement.innerHTML = testimonialList[i+1]
        testimonial.appendChild(nameElement)
        testimonial.appendChild(descElement)
        testimonialGrid.appendChild(testimonial)
    }
},1000)

document.getElementById("submit").addEventListener("click", function(){
    text = "Name: "
    text += document.getElementById("nameInput").value
    text += "%0D%0D"
    text+= document.getElementById("helpInput").value
    window.open(`mailto:mglamberg@gmail.com?subject=Photography Assistance&body=${text}`);
})

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
        window.open("https://maxncheesephotography.pixieset.com/"+albumText,"_blank")
    })
    photoName = 'albums/'+originalText+'/CoverPhoto.jpeg'
    photo.style.background = `url("${photoName}") no-repeat`
    photo.style.backgroundSize = "contain"
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

menu = document.getElementById("menuDiv")




showingMenu = true

window.onresize = function(){
    hideShowMenu()
}


listMenuIcon.parentElement.removeChild(listMenuIcon)

hideShowMenu()


function hideShowMenu() {
    if (window.innerWidth < 750 && showingMenu) {
        showingMenu = false
        menuElements.forEach(element => {
            element.parentElement.removeChild(element)
        })
        document.body.appendChild(listMenuIcon)
        shownListMenuElement.style.color = "#8F8F8E"
        text = shownMenuElement.innerHTML
        listMenuElements.forEach(element => {
            if (element.innerHTML == text) {
                shownListMenuElement = element
            }
        })
        listHomeLabel.style.color = "#8F8F8E"
        shownListMenuElement.style.color = "#444444"
        homePhotoScroll.parentElement.removeChild(homePhotoScroll)
        photoOptions.appendChild(homePhoto)
    } else if (window.innerWidth > 750 && !showingMenu) {
        showingMenu = true
        menuElements.forEach(element => {
            menu.appendChild(element)
        })
        listMenuIcon.parentElement.removeChild(listMenuIcon)
        text = shownListMenuElement.innerHTML
        homeLabel.style.color = "#8F8F8E"
        shownMenuElement.style.color = "#8F8F8E"
        menuElements.forEach(element => {
            if (element.innerHTML == text) {
                shownMenuElement = element
                shownMenuElement.style.color = "#444444"
            } else if (element.id == "about" && text == "About") {
                shownMenuElement = element
                shownMenuElement.children[0].style.color = "#444444"
            }
        })
        homePhoto.parentElement.removeChild(homePhoto)
        photoOptions.appendChild(homePhotoScroll)
    }

}

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

function shiftImagesLeft() {
    if (index == images.length-1) {
        index = 0
    } else {
        index += 1
    }
    rightArrow.animate([
        {transform: "scale(1.0)"},
        {transform: "scale(0.8)"},
        {transform: "scale(1.0)"},
    ], {
        duration: 400
    })
    placeImages()
}

function shiftImagesRight() {
    if (index == 0) {
        index = images.length-1
    } else {
        index -= 1
    }
    leftArrow.animate([
        {transform: "scale(1.0)"},
        {transform: "scale(0.8)"},
        {transform: "scale(1.0)"},
    ], {
        duration: 400
    })
    placeImages()
}

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

    if (window.innerWidth >= 750) {
        Array.from(document.getElementsByClassName("blackLayerSides")).forEach(element => {
            element.animate([
                {opacity: 0.7},
                {opacity: 0.8},
                {opacity: 1},
                {opacity: 0.8},
                {opacity: 0.7}
            ], {
                duration: 1500
            })
        })
        document.getElementById("blackLayerCenter").animate([
            {opacity: 0},
            {opacity: 0.5},
            {opacity: 1},
            {opacity: 0.5},
            {opacity: 0}
        ], {
            duration: 1500
        })
    } else {
        document.getElementById("blackLayerHome").animate([
            {opacity: 0},
            {opacity: 0.5},
            {opacity: 1},
            {opacity: 0.5},
            {opacity: 0}
        ], {
            duration: 1500
        })
    }

    setTimeout(function(){
        leftImage.src = images[left]
        rightImage.src = images[right]
    },600)
    setTimeout(function(){
        centerImage.src = images[index]
    },700)
    setTimeout(function(){
        homeImage.src = images[index]
    },600)
   
}

changePhotos(1500)

function changePhotos(time) {
    if (window.innerWidth < 750) {
        if (shownListMenuElement.innerHTML == "Home") {
            setTimeout(function(){
                index+=1
                if (index == images.length) {
                    index = 0
                }
                if (shownListMenuElement.innerHTML == "Home") {
                    placeImages()
                }
                changePhotos(3000)
            },time)
        } else {
            setTimeout(function(){
                changePhotos(3000)
            },time)
        }
    } else {
        setTimeout(function(){
            changePhotos(3000)
        },time)
    }
}



