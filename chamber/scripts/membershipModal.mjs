export function loadMembershipModal() {
    const dialog = document.getElementById("mydialog");

    dialog.innerHTML = `
        <div>
            <h2 id="modal-title"></h2>
            <button id="close-modal">X</button>
        </div>
        <p id="modal-cost"></p>
        <p id="modal-benefits"><strong></strong></p>
    `;

    dialog.querySelector("#close-modal").addEventListener("click", () => {
        dialog.close();
    });

    fetch("data/level.json")
        .then(response => response.json())
        .then(data => {
            const levels = data.membership_level;
            const buttons = document.querySelectorAll("button#modal");

            buttons.forEach((btn, index) => {
                btn.addEventListener("click", () => {
                    const membership = levels[index];

                    dialog.querySelector("#modal-title").textContent = membership.level;
                    dialog.querySelector("#modal-cost").textContent = `Cost: ${membership.cost}`;
                    dialog.querySelector("#modal-benefits").textContent = `Benefits: ${membership.benefits}`;

                    dialog.showModal();
                });
            });
        })
        .catch(error => console.error("Error loading the membership data:", error));
}