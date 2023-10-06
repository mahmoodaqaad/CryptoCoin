// to up

function toUp() {
    if (scrollY > 600) {
        document.querySelector(".toUp").classList.add("active")

    }
    else {

        document.querySelector(".toUp").classList.remove("active")
    }
    document.querySelector(".toUp").onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
}

// header

function headshow() {
    if (scrollY >= 80) {

        document.querySelector("header").classList.add("active")
    }
    else {

        document.querySelector("header").classList.remove("active")



    }
}
window.addEventListener("scroll", headshow)
window.addEventListener("scroll", countinga)
window.addEventListener("scroll", toUp)
// counting 
let counting = true
function countinga() {
    if (scrollY >= 900 && scrollY <= 1300 && counting) {

        counting = false

        let numCount = document.querySelectorAll(".count h1")
        numCount.forEach(h1 => {
            if (h1.dataset.num >= 1500) {
                h1.textContent = 600

            }
            let numcountintr = setInterval(() => {
                h1.textContent++
                if (h1.textContent == h1.dataset.num) {
                    clearInterval(numcountintr)
                    h1.classList.add("full")
                }
            }, 0.0000000001);

        })
    }
}


// burgger

let burger = document.querySelector(".bugger")
burger.onclick = () => {
    document.querySelector("nav").classList.toggle("active")
    burger.classList.toggle("active")
}




// road map

let next = document.querySelector(".roadmap  i.next")
let prev = document.querySelector(".roadmap  i.prev")
let container = document.querySelector(".roadmap  .contan")

next.onclick = () => {
    if (container.scrollLeft >= 2500) {
        prev.classList.add("active")
        setTimeout(() => {

            prev.classList.remove("active")
        }, 700);
        container.scrollLeft = 0
    }
    else {
        container.scrollLeft += 470

    }
}
prev.onclick = () => {
    if (container.scrollLeft == 0) {
        next.classList.add("active")
        setTimeout(() => {

            next.classList.remove("active")
        }, 700);

        container.scrollLeft = 3046



    }
    else {
        container.scrollLeft -= 470

    }
}
function cheakroadmap() {
    let isc = true
    if (container.scrollLeft >= 3045 && isc) {
        container.scrollLeft = 0
        isc = false
    }
    else if (container.scrollLeft <= 0 && isc) {
        container.scrollLeft = 3045

    }
}

// time

let day = document.querySelector(".token .day")
let hour = document.querySelector(".token .hour")
let minute = document.querySelector(".token .minute")
let second = document.querySelector(".token .second")

let d = 59
let h = 3
day.innerHTML = 1
hour.innerHTML = h
minute.innerHTML = d
second.innerHTML = d

let timeout = setInterval(() => {
    second.innerHTML--
    if (second.innerHTML < 0) {
        minute.innerHTML--
        second.innerHTML = d
        if (minute.innerHTML < 0) {
            console.log("tre")
            hour.innerHTML--
            minute.innerHTML = d
            second.innerHTML = d

            if (hour.innerHTML < 0) {
                day.innerHTML--
                hour.innerHTML = h


                minute.innerHTML = d
                second.innerHTML = d

            }
        }
    }
    if (day.innerHTML == 0 && second.innerHTML == 0 && minute.innerHTML == 0 && hour.innerHTML == 0) {
        clearInterval(timeout)
        setTimeout(() => {

            document.querySelectorAll(".token .container h1").forEach(h1 => {
                h1.classList.add("active")

            })
            document.querySelector(".btn.timebtn").classList.add("active")
        }, 100);


    }
}, 1000);



// faqs

let boxs = document.querySelectorAll(".faqs .container .box .title")
boxs.forEach(box => {

    box.onclick = () => {


        if (box.parentElement.classList.contains("active")) {
            removeactivefaqs();

        }
        else {
            removeactivefaqs();

            box.classList.add("active")
            box.parentElement.classList.add("active")
            box.querySelector("i").classList.add("active")
        }
    }
})

function removeactivefaqs() {
    boxs.forEach(box => {
        box.classList.remove("active")
        box.parentElement.classList.remove("active")

        box.querySelector("i").classList.remove("active")
    })


}

// anmtion


ScrollReveal({
    // reset: true,//عشان يعيد كل مرة
    distance: '80px',//مسافة البدء
    duration: 1000,//مدة التشغيل
    delay: 120//زمن التشغيل
});
ScrollReveal().reveal('.landing .info ,.about .container .img', { origin: 'left' });
ScrollReveal().reveal('.landing .img,.about .container .info', { origin: 'right' });
ScrollReveal().reveal('', { origin: 'top' });
ScrollReveal().reveal('.counting', { origin: 'bottom' });
