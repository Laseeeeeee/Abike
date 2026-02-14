function showLove() {
    document.getElementById("response").style.display = "block";

    // Wait 2 seconds (2000 ms) then redirect to memories.html
    setTimeout(function() {
        window.location.href = "val.html";
    }, 2000);
}

function moveButton() {
    const button = document.querySelector(".no-btn");

    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;

    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
