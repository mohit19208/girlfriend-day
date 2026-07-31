// ==========================
// Loading Screen
// ==========================

window.onload = () => {

    setTimeout(() => {

        document.getElementById("loading").style.display = "none";

    }, 4000);

};

// ==========================
// Floating Hearts
// ==========================

const hearts = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 300);

// ==========================
// Love Letter
// ==========================

const message = `Happy Girlfriend Day Myyy Cutie Pie ❤️

Tum sirf meri girlfriend nahi,
meri sundar si wife ho. ❤️

Meri Rasmalai,
tum mere liye bahut special ho.

Main apni aage ki puri life
tumhare saath hi dekhna chahta hoon. ❤️

Tumhari ek smile
mere pure din ko happy kar deti hai. 😊

Jab tum mere saath hoti ho,
to aisa lagta hai
ki main duniya ka sabse khush person hoon.

Kyuki mere paas
itna pyaar karne wali
biwi jo hai. ❤️

Main sach mein lucky hoon
ki tum meri life mein aayi.

I Love Youuuu
Meri Dharm Patni Ji ❤️

Bahut saara Love You
Meri Janeman ❤️

Forever Yours,
Mohit ❤️`;

const typing = document.getElementById("typing");

const openBtn = document.getElementById("openBtn");

openBtn.onclick = () => {

    document.getElementById("letter").style.display = "flex";

    let i = 0;

    typing.innerHTML = "";

    const interval = setInterval(() => {

        typing.innerHTML += message.charAt(i);

        i++;

        if (i >= message.length) {

            clearInterval(interval);

        }

    }, 40);

};

// ==========================
// Love Counter
// ==========================

const startDate = new Date("November 16, 2025 00:00:00");

function updateCounter() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;

    const minutes = Math.floor(diff / (1000 * 60)) % 60;

    const seconds = Math.floor(diff / 1000) % 60;

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}

setInterval(updateCounter, 1000);

updateCounter();

const envelope = document.getElementById("envelope");

envelope.onclick = () => {

document.getElementById("letter").style.display="flex";

document.getElementById("letter").scrollIntoView({

behavior:"smooth"

});

};