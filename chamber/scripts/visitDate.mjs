export function visitDate() {
    const overlay = document.getElementById("visit-overlay");
    const messageBox = document.getElementById("visit-message");
    const closeBtn = document.getElementById("close-overlay");

    if(!overlay) return
    
    const now = Date.now();
    const lastVisit = localStorage.getItem("lastVisit");
    let message = "";

    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitTime = parseInt(lastVisit, 10);
        const difference = now - lastVisitTime;
        const daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));

        if (daysPassed < 1) {
            message = "Back so soon! Awesome!";
        } else if (daysPassed === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = `You last visited ${daysPassed} days ago.`;
        }
    }

    localStorage.setItem("lastVisit", now.toString());

    messageBox.textContent = message;
    overlay.classList.remove("hidden");

    closeBtn.addEventListener("click", () => {
        overlay.classList.add("hidden");
    });
}
