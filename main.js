//toggle menu btn
let menu = document.querySelector(".menu")
let menuBtn = document.querySelector(".menu-btn")
let closeBtn = document.querySelector(".close")
menuBtn.onclick = () => {
    menu.classList.add("active")
}
closeBtn.onclick = () => {
    menu.classList.remove("active")
}
//change link class
let links = document.querySelectorAll(".link")
links.forEach(link => {
    link.addEventListener("click",changeClasses)
})
function changeClasses() {
    links.forEach(link => {
        link.classList.remove("active")
        this.classList.add("active")
    })
    menu.classList.remove("active")
}
//swiper fade
var homeSwiper = new Swiper(".home-swiper", {
    effect: "fade",
    autoplay: {
        loop: true,
        delay:3000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
//filter data
let testimonalTexts = document.querySelectorAll(".testimonial-text")
let testimonalBulletss = document.querySelectorAll(".testimonial-bullets article")

testimonalBulletss.forEach(bullet => {
    bullet.addEventListener("click", changeBullet)
    bullet.addEventListener("click" , filterText)
})
function changeBullet() {
    testimonalBulletss.forEach(bullet => {
        bullet.classList.remove("active")
        this.classList.add("active")
    })
}
function filterText() {
    testimonalTexts.forEach(bullet => {
        bullet.classList.remove("active")
        document.querySelectorAll(this.dataset.filter).forEach(bullet => {
            bullet.classList.add("active")
        })
    })
}
//empty value and send message to gmail
let clearBtn = document.querySelector(".clear")
let inps = document.querySelectorAll(".inp")
clearBtn.onclick = () => {
    inps.forEach(inp => {
        inp.value = ""
    })
}
//scroll window
let sections = document.querySelectorAll("section")
let header = document.querySelector("header")
let upBtn =  document.querySelector(".up-btn")
window.onscroll = () => {
    if (scrollY > 20) {
        header.classList.add("active")
        upBtn.classList.add("active")
    }
    else {
        header.classList.remove("active")
        upBtn.classList.remove("active")
    }
    //change class automaticly
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop
        let height = sec.offsetHeight
        if (top > offset - 150 && top < offset + height) {
            links.forEach(link => {
                link.classList.remove("active")
                let linkAtr = link.getAttribute("data-top")
                let secAtr = sec.getAttribute("data-height")
                if (linkAtr == secAtr) {
                    link.classList.add("active")
                }
            })
        }

    })
}
//up click
upBtn.onclick = () => {
    window.scrollTo({
        top: "0",
        behavior:"smooth"
    })

}