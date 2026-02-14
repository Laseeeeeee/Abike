// Typing Animation
const text = `My pretty girl ❤️

Happy Valentine’s Day.

Three years later and you still give me butterflies.
Even after everything, I still look at you and see my person.

I know I haven’t always shown up the way you needed.
I know I made you feel like you were competing with my time.

But losing you taught me something powerful.
Love isn’t about saying “I care.”
It’s about showing up. Consistently.

Thank you for saying yes to being my Valentine.
And thank you for even considering building something better with me.

I can’t wait to see you.
This time, I’m not just feeling love 
I’m choosing it intentionally.`;

let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}
typeWriter();


// Countdown (SET YOUR MINI DATE TIME HERE)
const date = new Date("2026-02-15T10:00:00").getTime();

const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = date - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("timer").innerHTML =
        days + "d " + hours + "h " + minutes + "m ";

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "It’s our time ❤️";
    }
}, 1000);


// Floating Hearts Generator
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);


// Music Play Fix (for browsers that block autoplay)
function playMusic() {
    document.getElementById("bg-music").play();
}
