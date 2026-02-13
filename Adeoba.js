function showLove() {
    document.getElementById("response").style.display = "block";
}

function moveButton() {
    const button = document.querySelector(".no-btn");

    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;

    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
